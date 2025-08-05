import StyledLink from "../components/StyledLink";

export const FooterSection = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <div className="w-full flex justify-center text-white bg-black/85 p-8 mt-16">
      <div className="max-w-screen-xl w-full flex flex-col gap-y-4 items-center text-center text-base uppercase">
        <div className="flex flex-wrap justify-center items-center flex-col">
          <span className="">Folgt uns auf Instagram:</span>
          <StyledLink
            className="tracking-[0.125rem] uppercase text-2xl"
            href="https://www.instagram.com/zechprellerei.de"
          >
            @zechprellerei.de
          </StyledLink>
        </div>
        <div className="flex-row">
          <StyledLink className="underline" href={"/imprint"}>
            Home
          </StyledLink>
          {"|"}
          <StyledLink className="underline" href={"/imprint"}>
            Impressum
          </StyledLink>
        </div>
        {`©${getCurrentYear()} ZECHPRELLEREI`}
        <div>
          Made with ❤️ from Tim Carry <br />
          Powered by Timo Waszek Internetdienstleistungen
        </div>
      </div>
    </div>
  );
};
