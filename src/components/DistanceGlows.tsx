import { motion } from 'framer-motion';

export const DistanceGlows = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Connection line */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M 20% 60% Q 50% 40% 80% 55%"
          fill="none"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(35, 90%, 65%)" />
            <stop offset="50%" stopColor="hsl(270, 40%, 85%)" />
            <stop offset="100%" stopColor="hsl(200, 70%, 70%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* India glow - warm */}
      <motion.div
        className="absolute left-[15%] top-[55%] w-4 h-4 rounded-full bg-glow-india glow-warm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-glow-india"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-body text-text-muted whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          India
        </motion.span>
      </motion.div>

      {/* Qatar glow - cool */}
      <motion.div
        className="absolute right-[15%] top-[50%] w-4 h-4 rounded-full bg-glow-qatar glow-cool"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-glow-qatar"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.span
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-body text-text-muted whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          Qatar
        </motion.span>
      </motion.div>
    </div>
  );
};
