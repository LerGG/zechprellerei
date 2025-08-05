import Link from "next/link";
import { iPeople } from "./peopleSection.types";

interface PeopleSectionItemProps {
  people: iPeople;
}

export const PeopleSectionItem = ({ people }: PeopleSectionItemProps) => {
  return (
    <Link
      href={`https://www.instagram.com/${people.uri}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center text-base sm:text-lg text-center
           px-6 py-1
           sm:px-8 sm:py-4
           rounded-sm border-2 border-white text-white sm:font-bold
           bg-black hover:bg-white hover:underline hover:text-black hover:scale-[0.96]
           transition-colors duration-200 uppercase"
    >
      {people.displayName}
    </Link>
  );
};
