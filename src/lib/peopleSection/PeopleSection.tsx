import { StyledHeadline } from "../components/StyledHeadline";

import { tRotate } from "../partnerSection/partnerSection.types";
import { iPeople } from "./peopleSection.types";
import { PeopleSectionItem } from "./PeopleSectionItem";

interface PeopleSectionProps {
  headline: string;
  rotate?: tRotate;
  people: iPeople[];
}

export const PeopleSection = ({
  headline,
  rotate,
  people,
}: PeopleSectionProps) => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full">
      <StyledHeadline rotate={rotate} text={headline} />
      <div className={`flex flex-wrap justify-around gap-6 w-full flex-row `}>
        {people.map((person) => (
          <PeopleSectionItem key={person.uri} people={person} />
        ))}
      </div>
    </div>
  );
};
