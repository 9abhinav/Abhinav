import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Cpu } from 'lucide-react';

export const ProjectVisual: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState(1048);
  const [violationActive, setViolationActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => prev + 1);
    }, 120);

    const violationInterval = setInterval(() => {
      setViolationActive((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(violationInterval);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-void/90 shadow-2xl">
      {/* CCTV HUD Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-charcoal/80 font-mono text-xs text-silver-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-semibold">CAM_04 // HIGHWAY_NORTH_CORRIDOR</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline text-silver-500">RES: 1920x1080 @ 60FPS</span>
          <span className="text-white bg-white/10 px-2 py-0.5 rounded">FRAME: #{activeFrame}</span>
        </div>
      </div>

      {/* Main Vision Simulation Canvas */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#08090d] overflow-hidden">
        {/* Highway Perspective Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Horizon Line */}
          <line x1="0%" y1="35%" x2="100%" y2="35%" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          {/* Lane Perspective Trajectories */}
          <line x1="50%" y1="35%" x2="10%" y2="100%" stroke="url(#gridGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="50%" y1="35%" x2="35%" y2="100%" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="35%" x2="65%" y2="100%" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50%" y1="35%" x2="90%" y2="100%" stroke="url(#gridGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>

        {/* Vehicle 1 - Normal Speed */}
        <motion.div
          animate={{
            top: ['45%', '70%'],
            left: ['25%', '18%'],
            scale: [0.75, 1.15],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-emerald-400/80 bg-emerald-500/10 rounded p-1 sm:p-2 pointer-events-none"
        >
          {/* Corner markers */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
          
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-emerald-300 font-bold tracking-tight">
              ID: #VEH_042 [SEDAN]
            </span>
            <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-emerald-400 bg-black/70 px-1 py-0.5 rounded border border-emerald-500/30">
              <Activity className="w-2.5 h-2.5" />
              <span>68 KM/H · NORMAL</span>
            </div>
          </div>
        </motion.div>

        {/* Vehicle 2 - Speed Violation Candidate */}
        <motion.div
          animate={{
            top: ['40%', '65%'],
            left: ['62%', '70%'],
            scale: [0.7, 1.2],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-red-500 bg-red-500/15 rounded p-1 sm:p-2 pointer-events-none"
        >
          {/* Corner markers */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-400" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-400" />

          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-red-300 font-bold tracking-tight">
              ID: #VEH_098 [SUV]
            </span>
            <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-red-400 bg-black/80 px-1 py-0.5 rounded border border-red-500/40">
              <ShieldAlert className="w-2.5 h-2.5 text-red-400 animate-pulse" />
              <span className="font-bold">104 KM/H · VIOLATION</span>
            </div>
          </div>
        </motion.div>

        {/* Vehicle 3 - Moderate Stream */}
        <motion.div
          animate={{
            top: ['36%', '55%'],
            left: ['48%', '46%'],
            scale: [0.55, 0.9],
          }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-blue-400/70 bg-blue-500/10 rounded p-1 pointer-events-none"
        >
          <span className="font-mono text-[8px] sm:text-[9px] text-blue-300 font-semibold">
            ID: #TRK_015 · 58 KM/H
          </span>
        </motion.div>

        {/* Real-Time Violation Toast Banner in HUD */}
        {violationActive && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-red-950/90 border border-red-500/50 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-start gap-3 text-left"
          >
            <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex-1 font-mono text-xs">
              <div className="flex items-center justify-between text-red-300 font-bold">
                <span>SPEED VIOLATION DETECTED</span>
                <span className="text-[10px] text-red-400/80">LANE 3</span>
              </div>
              <p className="text-[11px] text-silver-300 mt-0.5">
                Vehicle #VEH_098 recorded at <strong className="text-white">104 km/h</strong> (Limit: 80 km/h). Ingested into SQL DB.
              </p>
            </div>
          </motion.div>
        )}

        {/* Technical Calibration Watermark & Specs */}
        <div className="absolute bottom-3 left-4 font-mono text-[10px] text-silver-400 space-y-0.5 bg-black/60 p-2 rounded-lg backdrop-blur-md border border-white/5">
          <div>ALGO: YOLO + DEEPSORT + HOMOGRAPHY</div>
          <div>INFERENCE LATENCY: ~14.2ms / FRAME</div>
        </div>

        {/* Bottom Right Fast Status */}
        <div className="absolute bottom-3 right-4 flex items-center gap-2 font-mono text-[10px] text-white bg-charcoal/90 px-3 py-1.5 rounded-full border border-white/10">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>FASTAPI DISPATCHER: ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
