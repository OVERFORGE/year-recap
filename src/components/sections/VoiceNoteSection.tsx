import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState, useRef } from 'react';

export const VoiceNoteSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(220 30% 12%) 0%, hsl(260 25% 12%) 50%, hsl(270 25% 10%) 100%)',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <Volume2 className="w-10 h-10 text-pastel-lavender mx-auto" />
            
            <h2 className="font-display text-3xl md:text-4xl text-text-light">
              A Voice Note
            </h2>
            
            <p className="prose-story text-base">
              Sometimes typed words aren't enough.
            </p>

            {/* Voice note player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 space-y-4"
            >
              <audio 
                ref={audioRef}
                src="/voice-note.mp3"
                onEnded={() => setIsPlaying(false)}
              />

              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-pastel-lavender/20 hover:bg-pastel-lavender/30 flex items-center justify-center transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-pastel-lavender" />
                  ) : (
                    <Play className="w-6 h-6 text-pastel-lavender ml-1" />
                  )}
                </button>
                
                <div className="flex-1">
                  {/* Waveform visualization */}
                  <div className="flex items-center gap-0.5 h-12">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-pastel-lavender/40 rounded-full"
                        style={{ height: `${Math.random() * 60 + 20}%` }}
                        animate={isPlaying ? {
                          scaleY: [1, Math.random() * 1.5 + 0.5, 1],
                        } : {}}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.02,
                          repeat: isPlaying ? Infinity : 0,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-text-muted/60 text-sm">
                0:00 / 0:00 • voice-note.mp3
              </p>
            </motion.div>

            <p className="font-display text-lg text-text-muted italic pt-4">
              (Press play to hear my voice)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};