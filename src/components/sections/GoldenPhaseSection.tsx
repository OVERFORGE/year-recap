import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sun, CloudSun, Sunrise } from 'lucide-react';

const GoldenParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-warmth-gold"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

export const GoldenPhaseSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(38 20% 15%) 0%, hsl(35 30% 20%) 30%, hsl(40 35% 18%) 70%, hsl(35 25% 12%) 100%)',
      }}
    >
      {/* Golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <GoldenParticle key={p.id} delay={p.delay} x={p.x} y={p.y} />
        ))}
      </div>

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warmth-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Month range */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className="px-4 py-2 rounded-full bg-warmth-gold/10 text-warmth-gold font-body text-sm tracking-widest uppercase">
              May
            </span>
            <span className="text-warmth-gold">—</span>
            <span className="px-4 py-2 rounded-full bg-warmth-gold/10 text-warmth-gold font-body text-sm tracking-widest uppercase">
              July
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-warm mb-8"
          >
            The Golden Phase
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-2xl md:text-3xl text-text-light mb-16"
          >
            We were closest here.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <Sunrise className="w-8 h-8 text-warmth-gold mx-auto" />
              <p className="font-display text-lg text-text-light">Long nights on call</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <Sun className="w-8 h-8 text-warmth-gold mx-auto" />
              <p className="font-display text-lg text-text-light">Comfortable silences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <CloudSun className="w-8 h-8 text-warmth-gold mx-auto" />
              <p className="font-display text-lg text-text-light">Just... us</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="space-y-6"
          >
            <p className="prose-story">
              No labels. No pressure.<br />
              Just cutu pooku moments<br />
              across an impossible distance.
            </p>

            <p className="font-display text-xl text-warmth-soft italic pt-4">
              It was warm. It was safe.<br />
              It was ours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};