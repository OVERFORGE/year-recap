import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HardPhaseSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(35 25% 12%) 0%, hsl(230 25% 12%) 50%, hsl(235 30% 10%) 100%)',
      }}
    >
      {/* Subtle rain effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-4 bg-gradient-to-b from-text-muted to-transparent"
            style={{ left: `${Math.random() * 100}%`, top: '-10%' }}
            animate={{ y: ['0vh', '110vh'] }}
            transition={{
              duration: Math.random() * 1 + 1,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Month range */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className="px-4 py-2 rounded-full bg-text-muted/10 text-text-muted font-body text-sm tracking-widest uppercase">
              August
            </span>
            <span className="text-text-muted">—</span>
            <span className="px-4 py-2 rounded-full bg-text-muted/10 text-text-muted font-body text-sm tracking-widest uppercase">
              September
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl text-text-muted mb-12"
          >
            Wasn't an easy phase
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="prose-story">
              Not every day was easy.
            </p>

            <p className="prose-story">
              We had our moments <br />
              misunderstandings,<br />
              silence and arguments <br/> that felt different.
            </p>

            <p className="font-display text-xl text-text-muted/80 italic pt-8">
              But i hope we didn't give up on each other.
            </p>

            <p className="font-display text-xl text-text-light italic">
              I guess we grew.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};