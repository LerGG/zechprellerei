import { StyledHeadline } from "../components/StyledHeadline";
import { StyledSection } from "../components/StyledSection";
import { iPartner, tRotate } from "./partnerSection.types";
import { PartnerSectionItem } from "./PartnerSectionItem";

interface PartnerSectionProps {
  headline: string;
  partners: iPartner[];
  rotate?: tRotate;
}

export const PartnerSection = ({
  headline,
  partners,
  rotate,
}: PartnerSectionProps) => {
  return (
    <StyledSection>
      <StyledHeadline rotate={rotate} text={headline} />
      <div className="flex flex-col text-center gap-y-2">
        {partners.map((partner) => (
          <PartnerSectionItem key={partner.name} partner={partner} />
        ))}
      </div>
    </StyledSection>
  );
};
