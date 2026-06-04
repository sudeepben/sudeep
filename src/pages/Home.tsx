import { ArchiveSection } from "../components/creative/ArchiveSection";
import { ContactFooter } from "../components/creative/ContactFooter";
import { CreativeHero } from "../components/creative/CreativeHero";
import { InfoSection } from "../components/creative/InfoSection";
import { SkillsSection } from "../components/creative/SkillsSection";
import { WorkSection } from "../components/creative/WorkSection";

export function Home() {
  return (
    <>
      <CreativeHero />
      <WorkSection />
      <InfoSection />
      <SkillsSection />
      <ArchiveSection />
      <ContactFooter />
    </>
  );
}
