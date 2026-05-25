import { BuildStories } from "../components/sections/BuildStories";
import { BuilderLab } from "../components/sections/BuilderLab";
import { ContactSection } from "../components/sections/ContactSection";
import { CredentialsSection } from "../components/sections/CredentialsSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FeaturedBuilds } from "../components/sections/FeaturedBuilds";
import { GrowthSection } from "../components/sections/GrowthSection";
import { HeroSection } from "../components/sections/HeroSection";
import { SignalSection } from "../components/sections/SignalSection";
import { ToolboxSection } from "../components/sections/ToolboxSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <BuilderLab />
      <SignalSection />
      <FeaturedBuilds />
      <BuildStories />
      <ExperienceSection />
      <EducationSection />
      <CredentialsSection />
      <GrowthSection />
      <ToolboxSection />
      <ContactSection />
    </>
  );
}
