import Link from "next/link";

interface StyledLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function StyledLink({
  href,
  children,
  className,
}: StyledLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:text-gray-400 hover:decoration-gray-400 hover:underline + ${className}`}
    >
      {children}
    </Link>
  );
}
