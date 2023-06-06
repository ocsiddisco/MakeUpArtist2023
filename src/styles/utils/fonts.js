import { Noto_Serif, Open_Sans, Montserrat } from "next/font/google";

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: "700",
  style: ["italic"],
  // variable: "--font-noto-serif",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "300",
  style: ["normal"],
  // variable: "--font-open-sans",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  // variable: "--font-montserrat",
});
