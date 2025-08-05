import localFont from "next/font/local";

export const FONT_BEBAS_NEUE = localFont({
  src: [
    {
      path: "./assets/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});
