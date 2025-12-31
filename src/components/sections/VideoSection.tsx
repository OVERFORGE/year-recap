import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, Heart, Pause, Volume2, VolumeX } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useRef, useEffect } from 'react';

export const VideoSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [duration, setDuration] = useState(0);

  // Handle Video Progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
        setDuration(video.duration);
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(100);
    }

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isOpen]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = x / rect.width;
      videoRef.current.currentTime = percent * videoRef.current.duration;
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(270 25% 10%) 0%, hsl(280 25% 12%) 50%, hsl(290 20% 10%) 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pastel-lavender/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pastel-magenta/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <Heart className="w-10 h-10 text-pastel-lavender mx-auto animate-pulse" />
              <div className="absolute inset-0 blur-lg bg-pastel-lavender/30" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl text-text-light">
              With you its just magical moments
            </h2>
            
            <p className="prose-story text-base">
              A little glimpse into our shared moments this year.
            </p>

            {/* Video Player Trigger */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-24 h-24 rounded-full bg-glass-card border border-white/10 flex items-center justify-center mx-auto overflow-hidden transition-all duration-300 hover:border-pastel-lavender/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-pastel-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Heart className="w-8 h-8 text-pastel-lavender fill-pastel-lavender/20 ml-1 transition-transform duration-300 group-hover:scale-110" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl bg-transparent border-none p-0 shadow-2xl overflow-hidden rounded-3xl"
              >
                 <DialogTitle className="sr-only">Video Player</DialogTitle>
                <div 
                    className="aspect-video w-full bg-black/60 relative flex items-center justify-center group overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm"
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => isPlaying && setShowControls(false)}
                    onClick={togglePlay}
                >
                  <video 
                    ref={videoRef}
                    className="w-full h-full object-contain" 
                    playsInline
                    onClick={(e) => e.stopPropagation()} // Let container handle click for better UX
                    src="/path-to-your-video.mp4" // Placeholder
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Fallback/Placeholder message if no video source */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center text-white/50">
                    <div className="text-center">
                        <Heart className="w-12 h-12 mx-auto mb-2 text-white/20" />
                        <p>Add your video file to public/ and update the src</p>
                    </div>
                  </div>

                  {/* Big Heart Play Button (Center) */}
                  {!isPlaying && (
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 backdrop-blur-[1px]"
                        onClick={togglePlay}
                      >
                          <div className="relative group/play">
                            <Heart className="w-20 h-20 text-pastel-lavender fill-pastel-lavender/40 drop-shadow-[0_0_15px_rgba(167,139,250,0.5)] transition-transform duration-300 group-hover/play:scale-110" />
                            <Play className="absolute inset-0 w-8 h-8 text-white m-auto ml-7" />
                          </div>
                      </motion.button>
                  )}

                  {/* Custom Control Bar */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 z-30 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                        <div className="flex flex-col gap-2">
                            {/* Progress Bar */}
                            <div 
                                className="h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden group/seek"
                                onClick={handleSeek}
                            >
                                <div 
                                    className="h-full bg-gradient-to-r from-pastel-lavender to-pastel-magenta w-0 relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-0 group-hover/seek:scale-100 transition-transform" />
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={togglePlay}
                                        className="text-white/90 hover:text-pastel-lavender transition-colors"
                                    >
                                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Heart className="w-5 h-5 fill-current" />}
                                    </button>
                                    
                                    <span className="text-xs font-medium text-white/70 font-mono tracking-wider">
                                        {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={toggleMute}
                                        className="text-white/80 hover:text-white transition-colors"
                                    >
                                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <p className="font-display text-lg text-text-muted italic pt-4">
              (Click to watch)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
