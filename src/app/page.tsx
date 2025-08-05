import {
  MEDIA_PARTNER,
  PEOPLE_ARTISTS,
  PEOPLE_DJ,
  PEOPLE_FOOD,
  PEOPLE_HOSTS,
  PEOPLE_ORGANISATION,
  PEOPLE_SOUND,
  SPONSOREN,
} from "@/constants";
import { AudioPlayerSection } from "@/lib/audioPlayerSection/AudioPlayerSection";
import { StyledHeadlineText } from "@/lib/components/StlyedHeadlineText";
import { HeroSection } from "@/lib/heroSection/HeroSection";
import { PartnerSection } from "@/lib/partnerSection/PartnerSection";
import { PeopleSection } from "@/lib/peopleSection/PeopleSection";
import { TextSection } from "@/lib/textSection/TextSection";
import Image from "next/image";
import { LandingPageLocationSection } from "./landingPage/LandingPageLocationSection";
import { LandingPageDressCodeSection } from "./landingPage/LandingPageDressCodeSection";
import { LandingPageCultureSection } from "./landingPage/LandingPageCultureSection";
import { PageSoundTechnikSection } from "./landingPage/LandingPageSoundTechnikSection";
import { LandingPageFoodDrinks } from "./landingPage/LandingPageFoodDrinks";
import { LandingPageWelcomeSection } from "./landingPage/LandingPageWelcomeSection";

export default function LandingPage() {
  return (
    <div className="flex w-full h-full flex-col gap-y-16 items-center justify-center">
      <HeroSection />
      <div className="w-full h-full max-w-[480px]  flex flex-col gap-y-16 items-center justify-center px-4">
        <AudioPlayerSection headline={"Die Hymne"} />

        {/** PEOPLE */}
        <PeopleSection headline="Hosts" people={PEOPLE_HOSTS} />
        <PeopleSection headline="Artists" people={PEOPLE_ARTISTS} />
        <PeopleSection headline="Dj's" people={PEOPLE_DJ} />
        <PeopleSection headline="Soundtechnik" people={PEOPLE_SOUND} />
        <PeopleSection headline="Gastronomieleitung" people={PEOPLE_FOOD} />
        <PeopleSection headline="Orga-Team" people={PEOPLE_ORGANISATION} />

        {/** EVENT INFO */}
        <LandingPageWelcomeSection />
        <Image height="150" width="150" src="/img/crown.png" alt="logo klein" />
        <StyledHeadlineText>Was euch erwartet:</StyledHeadlineText>
        <TextSection headline="Premiere der Zechprellerei VOL. I:">
          Die erste Ausgabe unserer neuen Event-Reihe, <br />
          die Hip-Hop Partys aufein neues Level hebt! <br />
        </TextSection>
        <TextSection headline="Top Hip-Hop-Acts:">
          VOL. I: Akanni, T.Bong, Big Toast, Tenchoo, Lyrico, Rough Rabbit,
          <br />
          Meller, MC Mirror, Proton, N6ah, MIN-D
          <br />
          <br />
          Eine vielfältige Mischung aus
          <br />
          aufstrebenden und bekannten Künstlern,
          <br />
          die mit ihren Texten und Beats die Szene prägen.
          <br />
        </TextSection>
        <TextSection headline="Authentische Atmosphäre:">
          Taucht ein in die Welt des Hip-Hop mit Live-Performances, <br />
          die direkt ins Herz treffen.
          <br />
        </TextSection>
        <LandingPageFoodDrinks />
        <PageSoundTechnikSection />
        <LandingPageCultureSection />
        <LandingPageDressCodeSection />
        <LandingPageLocationSection />
        <StyledHeadlineText>
          Wir freuen uns auf eine unvergessliche Nacht voller Energie,
          Inspiration und Gemeinschaft!
        </StyledHeadlineText>

        {/** SPONSOR & PARTNER */}
        <PartnerSection headline="Sponsoren" partners={SPONSOREN} />
        <PartnerSection headline="Mediapartner" partners={MEDIA_PARTNER} />
      </div>
    </div>
  );
}
