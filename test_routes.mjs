import http from 'http';
import { spawn } from 'child_process';

const PORT = 3001;

async function runTests() {
  console.log("Starting Next.js server on port", PORT);
  
  const nextServer = spawn('npm', ['run', 'start', '--', '-p', PORT.toString()], {
    stdio: 'pipe',
    shell: true,
  });
  
  // Wait for server to be ready
  await new Promise(resolve => {
    nextServer.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Ready in') || output.includes('started server on')) {
        resolve(true);
      }
    });
    // Fallback timeout just in case the stdout doesn't match
    setTimeout(resolve, 8000);
  });

  console.log("Server is ready. Running HTTP checks...");

  const checkRoute = (path, expectedStatus, expectedRedirect) => {
    return new Promise((resolve) => {
      const req = http.get(`http://localhost:${PORT}${path}`, (res) => {
        let passed = res.statusCode === expectedStatus;
        let actualRedirect = res.headers.location;
        if (expectedRedirect && !actualRedirect?.includes(expectedRedirect)) {
          passed = false;
        }
        
        console.log(`[${passed ? 'PASS' : 'FAIL'}] GET ${path} -> ${res.statusCode} (Redirect: ${actualRedirect || 'none'})`);
        resolve(passed);
      });
      req.on('error', (err) => {
        console.log(`[FAIL] GET ${path} -> Network Error: ${err.message}`);
        resolve(false);
      });
    });
  };

  const results = [];

  // Public Routes Check
  results.push(await checkRoute('/', 200));

  // Protected Admin Routes (No Session)
  results.push(await checkRoute('/admin', 307, '/admin/login'));
  results.push(await checkRoute('/admin/dashboard', 307, '/admin/login'));
  results.push(await checkRoute('/admin/leads', 307, '/admin/login'));
  results.push(await checkRoute('/admin/inquiries', 307, '/admin/login'));

  // Auth page
  results.push(await checkRoute('/admin/login', 200));
  
  console.log(`\nTest Summary: ${results.filter(Boolean).length}/${results.length} passed.`);
  
  nextServer.kill();
  process.exit(0);
}

runTests();
