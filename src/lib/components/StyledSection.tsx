interface StyledSectionProps {
  children: React.ReactNode;
}

export const StyledSection = ({ children }: StyledSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5 gap-x-4 w-full">
      {children}
    </div>
  );
};
