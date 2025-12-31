import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone } from 'lucide-react';

const FaceTimeFrame = ({ 
  delay, 
  position 
}: { 
  delay: number; 
  position: 'left' | 'right' | 'center';
}) => {
  const positionClasses = {
    left: 'left-[5%] md:left-[10%]',
    right: 'right-[5%] md:right-[10%]',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} w-32 h-44 md:w-40 md:h-56 rounded-2xl glass-card overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender/10 to-pastel-rose/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Phone className="w-8 h-8 text-text-muted/50" />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-accent/60" />
      </div>
    </motion.div>
  );
};

export const DistanceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(320 30% 12%) 0%, hsl(295 28% 14%) 25%, hsl(270 25% 15%) 50%, hsl(250 25% 15%) 100%)',
      }}
    >
      
      <div className="absolute inset-0">
        <FaceTimeFrame delay={0.2} position="left" />
        <FaceTimeFrame delay={0.4} position="right" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-light">
              The Distance
            </h2>
            <p className="prose-story">
              2,500 kilometers apart.<br />
              Different time zones.<br />
              Same conversations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-display text-2xl md:text-3xl text-text-warm italic">
              Some calls were short.
            </p>
            <p className="font-display text-2xl md:text-3xl text-text-warm italic">
              Some lasted hours.
            </p>
            <p className="font-display text-2xl md:text-3xl text-text-light">
              Some days, your face was my comfort.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="pt-8"
          >
            <div className="w-px h-24 bg-gradient-to-b from-text-muted/50 to-transparent mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};