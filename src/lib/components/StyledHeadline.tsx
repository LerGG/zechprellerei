interface StyledHeadlineProps {
  text: string;
  rotate?: "CLOCKWISE" | "COUNTERCLOCKWISE";
}

export const StyledHeadline = ({ text, rotate }: StyledHeadlineProps) => {
  const rotation = !rotate
    ? ""
    : rotate === "CLOCKWISE"
    ? "rotate-[2deg]"
    : "rotate-[-2deg]";

  return (
    <div
      className={`text-4xl font-extrabold uppercase tracking-[0.125rem] drop-shadow-lg tracking-wide ${rotation} text-center `}
    >
      {text}
    </div>
  );
};
