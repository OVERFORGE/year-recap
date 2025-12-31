import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Camera, Heart } from 'lucide-react';
import first_hug from "../../assets/first_hug.png"
import doha_walk from "../../assets/doha_walk.png"
import sheesha_together from "../../assets/sheesha_together.png"
import favorite_place from "../../assets/favourite_place.jpg"
import us_real from "../../assets/us_real.png"
import fit_check from "../../assets/fit-check.png"
export const DecemberTripSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(235 30% 10%) 0%, hsl(200 30% 15%) 30%, hsl(210 35% 18%) 70%, hsl(220 30% 12%) 100%)',
      }}
    >
      {/* Sparkle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-star-cool"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Date indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-body text-sm tracking-widest uppercase">
              <MapPin className="w-4 h-4" />
              December 6–10 • Doha
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-text-light text-center mb-10 "
          >
            Finally,
            <span className="block text-gradient-cool">Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-2xl text-text-muted text-center mb-16"
          >
            After years of screens,<br />
            you were finally in front of me.
          </motion.p>

          {/* Photo gallery grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
          >
            {[
              { span: 'col-span-2 row-span-2', label: 'First hug / together',img:first_hug },
              { span: '', label: 'Walking around Doha',img:doha_walk },
              { span: '', label: 'Sheesha together',img:sheesha_together },
              { span: '', label: 'Cosplay Together',img:favorite_place },
              { span: '', label: 'Fit check together',img:fit_check },
              { span: '', label: 'Us, finally real',img:us_real },
              
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                className={`aspect-square ${item.span} rounded-2xl glass-card overflow-hidden group relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-pastel-lavender/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <img src={item.img} alt={item.label} />
                  <div className="absolute w-full items-center justify-center flex flex-col">
                    <Camera className="w-8 h-8 text-text-muted/40 group-hover:text-accent transition-colors " />
                  <span className="text-text-muted/50 text-sm text-center px-4 ">{item.label}</span>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-center space-y-6"
          >
            <Heart className="w-8 h-8 text-sunset-pink mx-auto animate-pulse-soft" />
            <p className="font-display text-2xl md:text-3xl text-text-light italic">
              Some moments don't need words.
            </p>
            <p className="prose-story">
              They just need presence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
