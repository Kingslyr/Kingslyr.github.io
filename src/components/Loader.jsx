import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030a14]">
      <div className="w-full max-w-sm px-8 text-center">
        <p className="text-xs tracking-[0.45em] text-emerald-200/80">ENVIROCORE</p>
        <h2 className="font-display mt-3 text-3xl text-white">Initializing Vision</h2>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15">
          <motion.div
            className="h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300"
            animate={{ x: ["-45%", "220%"] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
