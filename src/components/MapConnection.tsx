import { motion } from 'framer-motion';

export const MapConnection = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg 
        viewBox="0 0 1200 500" 
        className="w-full max-w-6xl h-auto opacity-90"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for connection line */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(340, 70%, 65%)" />
            <stop offset="50%" stopColor="hsl(280, 50%, 70%)" />
            <stop offset="100%" stopColor="hsl(200, 60%, 65%)" />
          </linearGradient>
          
          {/* Glow filters */}
          <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* India Map Outline - simplified but recognizable */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <motion.path
            d="M150 180 
               L180 160 L220 155 L250 165 L280 150 L320 155 L350 140
               L370 155 L380 180 L395 175 L410 190
               L405 220 L420 250 L415 280 L430 310
               L420 340 L400 360 L380 390 L350 410
               L320 400 L290 420 L260 400 L230 380
               L210 350 L180 330 L160 290 L150 250
               L140 220 Z"
            fill="none"
            stroke="hsl(340, 60%, 55%)"
            strokeWidth="2"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          {/* India fill with gradient */}
          <motion.path
            d="M150 180 
               L180 160 L220 155 L250 165 L280 150 L320 155 L350 140
               L370 155 L380 180 L395 175 L410 190
               L405 220 L420 250 L415 280 L430 310
               L420 340 L400 360 L380 390 L350 410
               L320 400 L290 420 L260 400 L230 380
               L210 350 L180 330 L160 290 L150 250
               L140 220 Z"
            fill="hsl(340, 50%, 45%)"
            fillOpacity="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          
          {/* New Delhi dot */}
          <motion.circle
            cx="290"
            cy="220"
            r="8"
            fill="hsl(340, 70%, 60%)"
            filter="url(#pinkGlow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
          <motion.circle
            cx="290"
            cy="220"
            r="8"
            fill="hsl(340, 70%, 60%)"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* India label */}
          <motion.text
            x="280"
            y="450"
            textAnchor="middle"
            className="fill-text-muted font-display text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            India
          </motion.text>
        </motion.g>

        {/* Qatar Map Outline */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <motion.path
            d="M870 200
               L890 195 L910 200 L925 210 L930 230
               L935 260 L930 290 L920 320 L905 340
               L890 350 L875 345 L865 330 L860 300
               L855 260 L860 230 L865 210 Z"
            fill="none"
            stroke="hsl(200, 60%, 55%)"
            strokeWidth="2"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M870 200
               L890 195 L910 200 L925 210 L930 230
               L935 260 L930 290 L920 320 L905 340
               L890 350 L875 345 L865 330 L860 300
               L855 260 L860 230 L865 210 Z"
            fill="hsl(200, 50%, 45%)"
            fillOpacity="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
          
          {/* Doha dot */}
          <motion.circle
            cx="895"
            cy="260"
            r="8"
            fill="hsl(200, 70%, 60%)"
            filter="url(#blueGlow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          />
          <motion.circle
            cx="895"
            cy="260"
            r="8"
            fill="hsl(200, 70%, 60%)"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Qatar label */}
          <motion.text
            x="895"
            y="400"
            textAnchor="middle"
            className="fill-text-muted font-display text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            Qatar
          </motion.text>
        </motion.g>

        {/* Connection line - curved path between the two dots */}
        <motion.path
          d="M298 220 Q 590 80 887 260"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="12 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.5, delay: 2.5, ease: "easeOut" }}
        />
        
        {/* Animated particle along the line */}
        <motion.circle
          r="4"
          fill="hsl(320, 60%, 70%)"
          filter="url(#pinkGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 4 }}
        >
          <animateMotion
            path="M298 220 Q 590 80 887 260"
            dur="4s"
            repeatCount="indefinite"
            begin="4s"
          />
        </motion.circle>
        
        {/* Distance text */}
        <motion.text
          x="550"
          y="180"
          textAnchor="middle"
          className="fill-text-muted font-display text-base italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 4 }}
        >
          2,500 km apart
        </motion.text>
      </svg>
    </div>
  );
};
