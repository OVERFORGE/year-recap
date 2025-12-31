import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Cake, Gift, Sparkles } from 'lucide-react';
import cutu_bday_night from "../../assets/cutu_bday_night.jpg"
import cutu_bday_day from "../../assets/cutu_bday_day.png"
const Confetti = () => {
  const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 3,
    color: ['bg-sunset-pink', 'bg-sunset-peach', 'bg-pastel-lavender', 'bg-star-warm'][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-2 h-2 rounded-full ${piece.color}`}
          style={{ left: `${piece.x}%`, top: '-10%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export const HerBirthdaySection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(250 25% 15%) 0%, hsl(340 20% 18%) 50%, hsl(350 25% 15%) 100%)',
      }}
    >
      <Confetti />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Month indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sunset-pink/10 text-sunset-pink font-body text-sm tracking-widest uppercase">
              March
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-text-light text-center mb-16"
          >
            Your Birthday
          </motion.h2>

          {/* Memory cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card rounded-2xl p-8 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-sunset-pink/20 flex items-center justify-center">
                <Cake className="w-6 h-6 text-sunset-pink" />
              </div>
              <h3 className="font-display text-2xl text-text-light">Midnight Celebration</h3>
              <p className="prose-story text-base">
                I stayed up past midnight, watching you blow out candles through a screen. 
                The lag couldn't hide your smile.
              </p>
              {/* Placeholder for image */}
              <div className="aspect-video rounded-xl bg-night-mid/50 flex items-center justify-center border border-white/5">
                <span className="text-text-muted/50 text-sm"><img src={cutu_bday_night} alt="" /></span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-card rounded-2xl p-8 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-sunset-peach/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-sunset-peach" />
              </div>
              <h3 className="font-display text-2xl text-text-light">The Dress</h3>
              <p className="prose-story text-base">
                I sent you a dress from miles away. 
                Seeing you wear it made the distance feel a little smaller.
              </p>
              {/* Placeholder for image */}
              <div className="aspect-video rounded-xl bg-night-mid/50 flex items-center justify-center border border-white/5">
                <span className="text-text-muted/50 text-sm"><img src={cutu_bday_day} alt="" /></span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-sunset-pink">
              <Sparkles className="w-5 h-5" />
              <span className="font-display text-xl italic text-text-warm">
                Being there without being there.
              </span>
              <Sparkles className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};