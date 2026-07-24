import { isAdminAuthBypassEnabled } from '@/lib/admin/bypass';

describe('isAdminAuthBypassEnabled', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns false when ADMIN_AUTH_DISABLED is not set', () => {
    delete process.env.ADMIN_AUTH_DISABLED;
    expect(isAdminAuthBypassEnabled()).toBe(false);
  });

  it('returns true when ADMIN_AUTH_DISABLED is "true" in development', () => {
    process.env.ADMIN_AUTH_DISABLED = 'true';
    process.env.NODE_ENV = 'development';
    expect(isAdminAuthBypassEnabled()).toBe(true);
  });

  it('returns false when ADMIN_AUTH_DISABLED is "true" in production', () => {
    process.env.ADMIN_AUTH_DISABLED = 'true';
    process.env.NODE_ENV = 'production';
    
    // Suppress console.warn for this test
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    expect(isAdminAuthBypassEnabled()).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('WARNING: ADMIN_AUTH_DISABLED=true is ignored in production'));
    
    consoleSpy.mockRestore();
  });
});
