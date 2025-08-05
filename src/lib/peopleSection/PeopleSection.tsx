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
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <StyledHeadline rotate={rotate} text={headline} />
      {people.map((people) => (
        <div key={people.uri}>
          <PeopleSectionItem key={people.uri} people={people} />
        </div>
      ))}
    </div>
  );
};
