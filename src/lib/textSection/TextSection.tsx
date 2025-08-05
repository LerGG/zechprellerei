import { StyledHeadlineText } from "../components/StlyedHeadlineText";
import { StyledSection } from "../components/StyledSection";

interface TextSectionProps {
  headline?: string;
  children?: React.ReactNode;
}

export const TextSection = ({ headline, children }: TextSectionProps) => {
  return (
    <StyledSection>
      <StyledHeadlineText>{headline}</StyledHeadlineText>
      <div className="text-center">{children}</div>
    </StyledSection>
  );
};
