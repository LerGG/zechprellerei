interface StyledHeadlineTextProps {
  children: React.ReactNode;
}

export const StyledHeadlineText = ({ children }: StyledHeadlineTextProps) => {
  return <div className="text-2xl font-bold text-center">{children}</div>;
};
