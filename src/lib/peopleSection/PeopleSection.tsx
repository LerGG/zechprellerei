import { StyledHeadline } from "../components/StyledHeadline";

import { tRotate } from "../partnerSection/partnerSection.types";
import { iPeople } from "./peopleSection.types";
import { PeopleSectionItem } from "./PeopleSectionItem";
interface PeopleSectionProps {
  headline: string;
  rotate?: tRotate;
  people: iPeople[];
  isList?: boolean;
}

export const PeopleSection = ({
  headline,
  rotate,
  people,
  isList = false, // 👈
}: PeopleSectionProps) => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full">
      <StyledHeadline rotate={rotate} text={headline} />
      <div
        className={`flex ${
          isList
            ? "flex-col items-center justify-evenly"
            : "flex-wrap justify-around"
        } gap-x-6 gap-y-6 w-full`}
      >
        {people.map((person) => (
          <PeopleSectionItem key={person.uri} people={person} />
        ))}
      </div>
    </div>
  );
};
