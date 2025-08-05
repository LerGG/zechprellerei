import "./globals.css";
import { FooterSection } from "@/lib/footerSection/FooterSection";
import { FONT_BEBAS_NEUE } from "@/fonts/bebasNeue";
import { HeaderSection } from "@/lib/headerSection/HeaderSection";
import { metadata, viewport } from "./metadata";

// Export needed to apply; see nextjs docs
export { metadata };
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${FONT_BEBAS_NEUE.className} antialiased`}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <div className="flex w-full min-h-screen flex-col">
          <HeaderSection />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
