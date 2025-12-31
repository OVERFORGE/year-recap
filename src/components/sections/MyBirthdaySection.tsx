import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PartyPopper, Heart } from 'lucide-react';
import pooku_bday_party from "../../assets/pooku_bday_party.jpg"
export const MyBirthdaySection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(350 25% 15%) 0%, hsl(35 15% 12%) 50%, hsl(38 20% 15%) 100%)',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Month indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-warmth-gold/10 text-warmth-gold font-body text-sm tracking-widest uppercase">
              October
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-text-light text-center mb-16"
          >
            My Birthday
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center space-y-8"
          >
            <div className="w-16 h-16 rounded-full bg-warmth-gold/20 flex items-center justify-center mx-auto">
              <PartyPopper className="w-8 h-8 text-warmth-gold" />
            </div>

            <p className="font-display text-2xl md:text-3xl text-text-light leading-relaxed">
              You surprised me.
            </p>

            <p className="prose-story">
              A cake appeared on my screen,<br />
              held up by your hands,<br />
              candles flickering in your living room.
            </p>

            {/* Placeholder for image */}
            <div className="aspect-video max-w-lg mx-auto rounded-2xl bg-night-mid/50 flex items-center justify-center border border-white/5">
              <span className="text-text-muted/50 text-sm"><img src={pooku_bday_party} alt="" /></span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline-flex items-center gap-3 pt-4"
            >
              <Heart className="w-5 h-5 text-sunset-pink fill-sunset-pink" />
              <span className="font-display text-xl text-text-warm italic">
                You made distance feel like nothing.
              </span>
              <Heart className="w-5 h-5 text-sunset-pink fill-sunset-pink" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};