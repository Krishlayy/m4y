"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Play, Pause, RotateCcw, Download, Sparkles, Flame, CheckCircle2, Film } from "lucide-react";

export default function ReelPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [statusText, setStatusText] = useState("READY TO PLAY / RENDER");
  const [elapsedSec, setElapsedSec] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const recordedChunksRef = useRef<Blob[]>([]);
  const isRenderingRef = useRef<boolean>(false);

  const drawScene = (ctx: CanvasRenderingContext2D, sec: number) => {
    // 9:16 Canvas Size: 720 x 1280
    // Vintage Newsprint Background
    ctx.fillStyle = "#F4EBD9";
    ctx.fillRect(0, 0, 720, 1280);

    // Newsprint Lines
    ctx.strokeStyle = "#E2D5BE";
    ctx.lineWidth = 1;
    for (let y = 0; y < 1280; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(720, y);
      ctx.stroke();
    }

    // Outer Border
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, 680, 1240);

    // Masthead
    ctx.fillStyle = "#000000";
    ctx.font = "bold 24px monospace";
    ctx.textAlign = "center";
    ctx.fillText("THE M4Y DAILY GAZETTE • SPECIAL DISRUPTION ISSUE", 360, 75);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(40, 95);
    ctx.lineTo(680, 95);
    ctx.stroke();

    const activeSec = sec % 15;

    if (activeSec < 3.5) {
      // Scene 1: TRADITIONAL AGENCIES EXPOSED
      ctx.fillStyle = "#CC0000";
      ctx.font = "900 32px sans-serif";
      ctx.fillText("🚨 SCAM ALERT 🚨", 360, 220);

      ctx.fillStyle = "#000000";
      ctx.font = "900 54px serif";
      ctx.fillText("BREAKING NEWS:", 360, 320);

      ctx.fillStyle = "#FF5500";
      ctx.fillRect(60, 370, 600, 80);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "900 56px serif";
      ctx.fillText("AGENCIES EXPOSED!", 360, 430);

      ctx.fillStyle = "#111111";
      ctx.font = "700 34px serif";
      ctx.fillText("90% of brands burn ad budgets", 360, 600);
      ctx.fillText("on manual spreadsheets &", 360, 660);
      ctx.fillText("junior account interns.", 360, 720);
    } else if (activeSec < 7.0) {
      // Scene 2: 2 SOFTWARE GRADUATES REFUSE CUBICLES
      ctx.fillStyle = "#000000";
      ctx.fillRect(60, 180, 600, 60);
      ctx.fillStyle = "#FFD700";
      ctx.font = "900 28px monospace";
      ctx.fillText("⚡ THE ENGINEER REVOLUTION", 360, 220);

      ctx.fillStyle = "#000000";
      ctx.font = "900 52px serif";
      ctx.fillText("2 CS GRADUATES", 360, 340);
      ctx.fillText("REFUSE CUBICLES!", 360, 410);

      ctx.fillStyle = "#FF5500";
      ctx.fillRect(60, 480, 600, 90);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "900 42px sans-serif";
      ctx.fillText("100% DIRECT FOUNDER EXECUTION", 360, 540);

      ctx.fillStyle = "#111111";
      ctx.font = "700 34px serif";
      ctx.fillText("Kishalay & Ayushman launch M4Y:", 360, 680);
      ctx.fillText("Zero interns. High-velocity code.", 360, 740);
    } else if (activeSec < 11.0) {
      // Scene 3: 0.3s NEXT.JS STORES GENERATE 4.2X ROAS
      ctx.fillStyle = "#008837";
      ctx.font = "900 32px sans-serif";
      ctx.fillText("📈 VERIFIED DATA REPORT", 360, 220);

      ctx.fillStyle = "#FFD700";
      ctx.fillRect(40, 280, 640, 100);
      ctx.fillStyle = "#000000";
      ctx.font = "900 56px serif";
      ctx.fillText("0.3s NEXT.JS STORES", 360, 350);

      ctx.fillStyle = "#000000";
      ctx.font = "900 52px serif";
      ctx.fillText("GENERATE 4.2X ROAS!", 360, 470);

      ctx.fillStyle = "#000000";
      ctx.fillRect(80, 560, 560, 70);
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "700 32px monospace";
      ctx.fillText("✔ Sub-Second Mobile Load Speed", 360, 605);

      ctx.fillStyle = "#25D366";
      ctx.fillRect(80, 660, 560, 70);
      ctx.fillStyle = "#000000";
      ctx.font = "700 32px monospace";
      ctx.fillText("✔ 3-Sec WhatsApp Lead Capture", 360, 705);
    } else {
      // Scene 4: ONLY 10 FOUNDING SPOTS LEFT
      ctx.fillStyle = "#FF5500";
      ctx.font = "900 34px sans-serif";
      ctx.fillText("🔥 SPECIAL EDITION OFFER", 360, 220);

      ctx.fillStyle = "#000000";
      ctx.font = "900 56px serif";
      ctx.fillText("ONLY 10 SPOTS LEFT", 360, 330);
      ctx.fillText("FOR LAUNCH PRICING", 360, 400);

      ctx.fillStyle = "#000000";
      ctx.fillRect(60, 520, 600, 110);
      ctx.fillStyle = "#FFD700";
      ctx.font = "900 42px sans-serif";
      ctx.fillText("👉 CLAIM YOUR SPOT NOW", 360, 590);

      ctx.fillStyle = "#111111";
      ctx.font = "700 32px monospace";
      ctx.fillText("m4y.world/book-call", 360, 720);
      ctx.fillText("Call: +91 92587 35381", 360, 770);
    }

    // Bottom Ticker Bar
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 1180, 720, 100);
    ctx.fillStyle = "#FFD700";
    ctx.font = "bold 26px monospace";
    ctx.fillText("M4Y AGENCY • 2 CS FOUNDERS • 0.3S STORES • 4.2X ROAS", 360, 1240);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawScene(ctx, 0);
    }
  }, []);

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;
    setElapsedSec(Math.floor(elapsed));

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) drawScene(ctx, elapsed);
    }

    if (isRenderingRef.current && elapsed >= 15) {
      stopRender();
      return;
    }

    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  const handlePreview = () => {
    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    startTimeRef.current = 0;
    isRenderingRef.current = false;
    setIsPlaying(true);
    setStatusText("PLAYING PREVIEW");
    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  const startRenderAndDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    recordedChunksRef.current = [];
    startTimeRef.current = 0;
    isRenderingRef.current = true;
    setIsPlaying(true);
    setStatusText("RECORDING VIDEO...");

    const stream = canvas.captureStream(30);
    let options: MediaRecorderOptions = { mimeType: "video/webm;codecs=vp9" };
    if (!MediaRecorder.isTypeSupported(options.mimeType!)) {
      options = { mimeType: "video/webm" };
    }

    try {
      const recorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "m4y_newspaper_reel.webm";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 100);

        setStatusText("DOWNLOAD COMPLETE! 🎉");
        setIsPlaying(false);
      };

      recorder.start();
      animFrameIdRef.current = requestAnimationFrame(animate);
    } catch (e) {
      console.error(e);
      setStatusText("RECORDING ERROR");
    }
  };

  const stopRender = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    isRenderingRef.current = false;
    setIsPlaying(false);
    setStatusText("READY TO RENDER");
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-[#FF5500] selection:text-white pt-28 md:pt-36 flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow w-full px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF5500] text-white font-black text-xs uppercase tracking-widest border-2 border-white mb-4 shadow-[3px_3px_0_#000]">
            <Film className="w-4 h-4 text-white" /> 1-Click Instagram Reel Generator
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Trendy Newspaper <span className="bg-[#FFD700] text-black px-3 py-1 border-4 border-white inline-block">Text Edit Reel</span>
          </h1>
          <p className="text-gray-400 font-bold text-sm mt-3 max-w-xl mx-auto">
            15-second high-tempo text edit. Click "Render & Download" below to export your ready-to-post 9:16 Instagram Reel video!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Canvas Viewport */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-[340px] sm:w-[380px] h-[670px] bg-black border-8 border-white rounded-[32px] overflow-hidden shadow-[12px_12px_0_#FF5500] flex flex-col items-center justify-between p-4">
              
              <div className="w-full flex items-center justify-between text-xs font-mono font-bold text-white z-20 bg-black/80 p-2 rounded-lg border border-white/20">
                <span className="flex items-center gap-2 text-[#FFD700]">
                  <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? "bg-red-500 animate-ping" : "bg-gray-500"}`}></span>
                  <span>{statusText}</span>
                </span>
                <span className="text-[#FFD700]">00:{elapsedSec < 10 ? `0${elapsedSec}` : elapsedSec} / 00:15</span>
              </div>

              <canvas ref={canvasRef} width="720" height="1280" className="w-full h-full object-contain rounded-xl my-2 border-2 border-white/20"></canvas>

              <div className="w-full flex flex-col gap-2 z-20">
                <button
                  onClick={startRenderAndDownload}
                  className="w-full bg-[#25D366] text-black font-black text-sm uppercase py-3.5 px-4 border-2 border-black shadow-[4px_4px_0_#fff] hover:bg-green-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 fill-black" /> Render & Download Video File (.webm / .mp4)
                </button>
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={handlePreview}
                    className="flex-1 bg-[#FF5500] text-white font-black text-xs uppercase py-2.5 px-3 border border-white hover:bg-orange-600 flex items-center justify-center gap-1"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Preview Animation
                  </button>
                  <button
                    onClick={stopRender}
                    className="bg-gray-800 text-white font-black text-xs uppercase py-2.5 px-4 border border-white/30 hover:bg-gray-700"
                  >
                    ⏹ Stop
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Script Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-black p-5 border-4 border-white shadow-[8px_8px_0_#FF5500]">
              <h3 className="text-xl font-black uppercase text-[#FFD700] mb-3">
                📸 Generated Newspaper Cover Graphic
              </h3>
              <img src="/m4y_newspaper_scene1.jpg" alt="Newspaper Scene 1" className="w-full h-auto rounded border-2 border-white object-cover max-h-[300px]" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }} />
            </div>

            <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0_#FFD700]">
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                📝 On-Screen Text Overlay Script (No Voiceover)
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 bg-gray-100 border-l-4 border-red-600">
                  <strong className="text-red-600 block mb-1">SCENE 1 (00:00 - 00:03.5)</strong>
                  "TRADITIONAL AGENCIES EXPOSED! 🚨 90% of brands burn ad budget on manual spreadsheets & junior interns."
                </div>
                <div className="p-3 bg-gray-100 border-l-4 border-[#FF5500]">
                  <strong className="text-[#FF5500] block mb-1">SCENE 2 (00:03.5 - 00:07)</strong>
                  "2 SOFTWARE GRADUATES REFUSE CORPORATE JOBS! ⚡ Kishalay & Ayushman launch M4Y: 100% direct founder execution."
                </div>
                <div className="p-3 bg-gray-100 border-l-4 border-green-600">
                  <strong className="text-green-600 block mb-1">SCENE 3 (00:07 - 00:11)</strong>
                  "REPORT: 0.3s NEXT.JS STORES GENERATE 4.2X HIGHER ROAS! 📈 Sub-second speed + 3-sec WhatsApp lead capture."
                </div>
                <div className="p-3 bg-gray-100 border-l-4 border-amber-500">
                  <strong className="text-amber-600 block mb-1">SCENE 4 (011s - 00:15)</strong>
                  "SPECIAL EDITION: ONLY 10 FOUNDING SPOTS LEFT! 🔥 Tap link in bio 👉 m4y.world/book-call"
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
