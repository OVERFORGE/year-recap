import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface StarryNightStarsProps {
  count?: number;
}

export const StarryNightStars = ({ count = 60 }: StarryNightStarsProps) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
      // Van Gogh style - some stars have halos
      hasHalo: Math.random() > 0.7,
      haloSize: Math.random() * 20 + 15,
    }));
  }, [count]);

  const swirls = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 60,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Swirly cloud patterns - Starry Night inspired */}
      {swirls.map((swirl) => (
        <motion.div
          key={`swirl-${swirl.id}`}
          className="absolute"
          style={{
            left: `${swirl.x}%`,
            top: `${swirl.y}%`,
            transform: `rotate(${swirl.rotation}deg) scale(${swirl.scale})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{
            duration: 8 + swirl.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <motion.path
              d="M20 50 Q50 20 80 50 T140 50 T200 50"
              fill="none"
              stroke="hsl(280, 40%, 60%)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeOpacity="0.3"
              animate={{
                d: [
                  "M20 50 Q50 20 80 50 T140 50 T200 50",
                  "M20 50 Q50 30 80 50 T140 45 T200 55",
                  "M20 50 Q50 20 80 50 T140 50 T200 50",
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Stars with optional halos */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: star.delay * 0.3 }}
        >
          {/* Halo for special stars - Van Gogh style */}
          {star.hasHalo && (
            <motion.div
              className="absolute rounded-full"
              style={{
                width: star.haloSize,
                height: star.haloSize,
                left: -star.haloSize / 2 + star.size / 2,
                top: -star.haloSize / 2 + star.size / 2,
                background: `radial-gradient(circle, hsl(45, 80%, 75%, 0.3) 0%, hsl(340, 60%, 70%, 0.1) 50%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: star.duration * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
            />
          )}
          
          {/* Star core */}
          <motion.div
            className="rounded-full"
            style={{
              width: star.size,
              height: star.size,
              background: star.hasHalo 
                ? 'hsl(45, 90%, 80%)' 
                : `hsl(${280 + Math.random() * 80}, 50%, 85%)`,
              boxShadow: star.hasHalo 
                ? '0 0 10px hsl(45, 80%, 70%), 0 0 20px hsl(340, 50%, 60%)' 
                : '0 0 4px hsl(300, 40%, 80%)',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, star.hasHalo ? 1.2 : 1.1, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        </motion.div>
      ))}

      {/* Large feature stars like in Starry Night */}
      {[
        { x: 15, y: 20, size: 6 },
        { x: 85, y: 15, size: 5 },
        { x: 50, y: 8, size: 7 },
      ].map((feature, i) => (
        <motion.div
          key={`feature-${i}`}
          className="absolute"
          style={{
            left: `${feature.x}%`,
            top: `${feature.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 + i * 0.3 }}
        >
          {/* Outer glow rings */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 60,
              height: 60,
              left: -27,
              top: -27,
              background: `conic-gradient(from 0deg, hsl(340, 60%, 60%, 0.2), hsl(45, 70%, 70%, 0.3), hsl(200, 50%, 70%, 0.2), hsl(340, 60%, 60%, 0.2))`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 40,
              height: 40,
              left: -17,
              top: -17,
              background: `radial-gradient(circle, hsl(45, 90%, 80%, 0.6) 0%, hsl(340, 60%, 70%, 0.3) 40%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
          {/* Core */}
          <div
            className="rounded-full"
            style={{
              width: feature.size,
              height: feature.size,
              background: 'hsl(50, 100%, 90%)',
              boxShadow: '0 0 15px hsl(45, 90%, 75%), 0 0 30px hsl(340, 60%, 65%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};