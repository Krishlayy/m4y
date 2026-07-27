"use client";

import { motion } from "framer-motion";
import { submitEmailCapture } from "@/lib/public-actions";
import { useState, useEffect, useRef } from "react";
import { Target, Play } from "lucide-react";

type GameState = "idle" | "playing" | "gameover";

export default function EmailCapture() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [targetPos, setTargetPos] = useState({ top: 50, left: 50 });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const gameAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("gameover");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameState("playing");
    moveTarget();
  };

  const moveTarget = () => {
    // Keep target within 10% to 90% bounds so it doesn't clip off edges
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    setTargetPos({ top, left });
  };

  const handleTargetClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent clicking through
    if (gameState !== "playing") return;
    setScore((prev) => prev + 1);
    moveTarget();
  };

  const handleSubmit = async (formData: FormData) => {
    setFormStatus("loading");
    const result = await submitEmailCapture(formData);
    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  };

  return (
    <section className="bg-[#FF3B00] border-t-4 border-b-4 border-black py-16 md:py-32 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-black/10 font-black text-9xl pointer-events-none rotate-12">
        $
      </div>
      <div className="absolute bottom-10 right-10 text-black/10 font-black text-9xl pointer-events-none -rotate-12">
        %
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border-4 border-black shadow-[16px_16px_0_#000] w-full flex flex-col overflow-hidden"
        >
          {/* Game Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
            <div className="font-black uppercase tracking-widest flex items-center gap-2 text-[#FFD700]">
              <Target className="w-5 h-5" /> 
              Lead Catcher v1.0
            </div>
            {gameState === "playing" && (
              <div className="font-black text-xl">
                TIME: <span className="text-[#FF3B00]">{timeLeft}s</span> | SCORE: <span className="text-[#FFD700]">{score}</span>
              </div>
            )}
          </div>

          {/* Game Area */}
          <div 
            ref={gameAreaRef}
            className="relative h-[400px] md:h-[500px] w-full bg-gray-50 flex flex-col items-center justify-center p-6 cursor-crosshair"
          >
            {/* IDLE STATE */}
            {gameState === "idle" && (
              <div className="text-center z-10 p-6 bg-white border-4 border-black shadow-[8px_8px_0_#000] max-w-lg">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                  How Fast Are You?
                </h2>
                <p className="font-bold text-lg mb-8">
                  Engineers love performance. You have 10 seconds to catch as many falling leads as possible.
                </p>
                <button 
                  onClick={startGame}
                  className="bg-[#FFD700] text-black border-4 border-black font-black uppercase text-2xl px-8 py-4 shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full"
                >
                  <Play className="w-6 h-6 fill-black" />
                  Start Game
                </button>
              </div>
            )}

            {/* PLAYING STATE */}
            {gameState === "playing" && (
              <button
                onClick={handleTargetClick}
                style={{ top: `${targetPos.top}%`, left: `${targetPos.left}%` }}
                className="absolute w-16 h-16 bg-[#FF3B00] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_#000] -translate-x-1/2 -translate-y-1/2 active:scale-90 active:shadow-none transition-transform"
              >
                <div className="text-[#FFD700] font-black text-2xl">$</div>
              </button>
            )}

            {/* GAMEOVER STATE */}
            {gameState === "gameover" && (
              <div className="text-center z-10 p-6 bg-white border-4 border-black shadow-[8px_8px_0_#000] max-w-2xl w-full">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
                  You caught {score} lead{score !== 1 ? 's' : ''}!
                </h2>
                <p className="text-lg md:text-xl font-bold mb-8">
                  Not bad for a human. We build automated systems that do this 24/7. Drop your email to see how we systematically scale brands.
                </p>

                {formStatus === "success" ? (
                  <div className="bg-[#25D366] text-white p-6 border-4 border-black font-black uppercase text-xl">
                    You're on the list. Keep an eye on your inbox!
                  </div>
                ) : (
                  <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      name="email" 
                      required
                      disabled={formStatus === "loading"}
                      placeholder="ENTER YOUR EMAIL..." 
                      className="flex-grow border-4 border-black p-4 text-xl font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD700] bg-[#f0f0f0] transition-all disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="bg-black text-[#FFD700] font-black uppercase text-xl px-8 py-4 border-4 border-black shadow-[4px_4px_0_#000] hover:translate-y-1 transition-all shrink-0 disabled:opacity-50"
                    >
                      {formStatus === "loading" ? "Sending..." : "Submit"}
                    </button>
                  </form>
                )}
                
                {formStatus === "error" && (
                  <p className="text-[#FF3B00] font-bold mt-4">Failed to submit. Please try again.</p>
                )}
                
                <div className="mt-6 flex justify-between items-center text-sm font-bold uppercase tracking-widest opacity-50">
                  <span>No spam. Unsubscribe anytime.</span>
                  <button onClick={startGame} className="underline hover:text-[#FF3B00]">Play Again</button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
