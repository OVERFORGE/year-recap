import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { HeroSection } from '@/components/sections/HeroSection';
import { DistanceSection } from '@/components/sections/DistanceSection';
import { HerBirthdaySection } from '@/components/sections/HerBirthdaySection';
import { MyBirthdaySection } from '@/components/sections/MyBirthdaySection';
import { GoldenPhaseSection } from '@/components/sections/GoldenPhaseSection';
import { HardPhaseSection } from '@/components/sections/HardPhaseSection';
import { DecemberTripSection } from '@/components/sections/DecemberTripSection';
import { VoiceNoteSection } from '@/components/sections/VoiceNoteSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { EndingSection } from '@/components/sections/EndingSection';

const Index = () => {
  useSmoothScroll();

  return (
    <main className="relative">
      <HeroSection />
      <DistanceSection />
      <HerBirthdaySection />
      <MyBirthdaySection />
      <GoldenPhaseSection />
      <HardPhaseSection />
      <DecemberTripSection />
      <VoiceNoteSection />
      <VideoSection />
      <EndingSection />
    </main>
  );
};

export default Index;