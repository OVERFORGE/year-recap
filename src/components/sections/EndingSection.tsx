import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Stars } from '../Stars';

export const EndingSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(180deg, hsl(270 25% 10%) 0%, hsl(250 30% 8%) 50%, hsl(230 35% 7%) 100%)',
      }}
    >
      <Stars count={40} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
            className="space-y-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-2xl md:text-3xl text-text-muted"
            >
              No pressure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-display text-2xl md:text-3xl text-text-muted"
            >
              No questions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-display text-2xl md:text-3xl text-text-warm"
            >
              Just gratitude.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="pt-8"
            >
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-text-light leading-tight">
                Thank you<br />
                <span className="text-gradient-warm">for this year.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="pt-16"
            >
              <div className="w-px h-16 bg-gradient-to-b from-text-muted/30 to-transparent mx-auto mb-8" />
              <p className="font-body text-sm text-text-muted/50 tracking-widest uppercase">
                2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warmth-gold/5 to-transparent pointer-events-none" />
    </section>
  );
};