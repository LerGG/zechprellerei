import Image from "next/image";
import Link from "next/link";

export const HeaderSection = () => {
  return (
    <div className="flex w-full h-[25vh] bg-black/70 items-center justify-center z-1">
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="logo"
          width="300"
          height="300"
          style={{ objectFit: "contain", filter: "invert(1)" }}
        />
      </Link>
    </div>
  );
};
