import { motion } from 'framer-motion';
import { StarryNightStars } from '@/components/StarryNightStars';
import { MapConnection } from '@/components/MapConnection';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient - Starry Night inspired */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, hsl(235 45% 8%) 0%, hsl(260 40% 12%) 30%, hsl(280 38% 15%) 60%, hsl(320 30% 12%) 100%)',
        }}
      />
      
      {/* Swirly overlay pattern */}
      <div 
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, hsl(280 40% 25% / 0.4) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 30%, hsl(340 35% 20% / 0.3) 0%, transparent 45%),
                       radial-gradient(ellipse at 50% 80%, hsl(260 35% 18% / 0.4) 0%, transparent 50%)`,
        }}
      />
      
      <StarryNightStars count={70} />
      
      {/* Map Connection - positioned in the middle-lower area */}
      <div className="absolute inset-0 z-[2] flex items-end pb-20 md:pb-32">
        <MapConnection />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.p
            className="font-italiana text-xl md:text-2xl lg:text-5xl text-text-accent italic tracking-widest mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Another year passed by but
          </motion.p>
          
          <motion.h1
            className="font-playfair text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-text-light font-medium tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            style={{ textShadow: '0 0 60px hsl(340, 50%, 50%, 0.3)' }}
          >
            We <span className="text-gradient-starry font-semibold">met</span>.
          </motion.h1>
          
          <motion.p
            className="font-display text-xl md:text-2xl lg:text-3xl text-text-muted max-w-3xl mx-auto leading-relaxed tracking-wide"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            another year we shared,<br />
            <span className="text-text-accent">from two different places.</span>
          </motion.p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-50  left-1/2 -translate-x-1/2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-sunset-pink/40 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-sunset-pink/60 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};