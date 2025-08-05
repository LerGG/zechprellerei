interface StyledTextProps {
  children: React.ReactNode;
}

export const StyledText = ({ children }: StyledTextProps) => {
  return (
    <div className="uppercase font-bebas font-bold text-base ">{children}</div>
  );
};
