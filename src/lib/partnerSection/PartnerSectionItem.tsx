import StyledLink from "../components/StyledLink";
import { StyledText } from "../components/StyledText";
import { iPartner } from "./partnerSection.types";

interface PartnerSectionItemProps {
  partner: iPartner;
}

export const PartnerSectionItem = ({ partner }: PartnerSectionItemProps) => {
  if (partner.href) {
    return (
      <StyledLink
        href={partner.href}
        className="uppercase font-bold text-base underline"
      >
        {partner.name}
      </StyledLink>
    );
  }

  return <StyledText>{partner.name}</StyledText>;
};
