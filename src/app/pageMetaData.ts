import { Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "ZECHPRELLEREI Vol. I",
  description:
    "VOL. I am 23.08.25 im NEULAND Bochum! START: 18:00uhr | Tim Carry und Proton laden ein... | @ZECHPRELLEREI.DE @neuland_bochum",
  applicationName: "ZECHPRELLEREI",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://zechprellerei.de",
  },
  openGraph: {
    title: "ZECHPRELLEREI VOL. I",
    description:
      "VOL. I am 23.08.25 im NEULAND Bochum! START: 18:00uhr | Tim Carry und Proton laden ein... | @ZECHPRELLEREI.DE @neuland_bochum",
    url: "https://zechprellerei.de",
    images: [
      {
        url: "https://i.ibb.co/Mkwx1vZJ/FLYER.png",
        width: 800,
        height: 600,
        alt: "ZECHPRELLEREI Flyer",
      },
    ],
    siteName: "ZECHPRELLEREI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZECHPRELLEREI VOL. I",
    description:
      "VOL. I am 23.08.25 im NEULAND Bochum! START: 18:00uhr | Tim Carry und Proton laden ein... | @ZECHPRELLEREI.DE @neuland_bochum",
    images: ["https://i.ibb.co/Mkwx1vZJ/FLYER.png"],
  },
};
