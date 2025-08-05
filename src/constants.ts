import { iPartner } from "./lib/partnerSection/partnerSection.types";
import { iPeople } from "./lib/peopleSection/peopleSection.types";

/**
 * CDN
 */

export const CLOUD_FRONT_CDN = "https://d2vndchdrd9nga.cloudfront.net";

export const VIDEO_FORMAT = ".mp4";

export const BACKGROUND_VIDEO_NAME = "loop";

export const AUDIO_FORMAT = ".mp3";

export const SONG_NAME = "beat";

/**
 * Content
 */

export const SPONSOREN: iPartner[] = [
  { name: "LUMEN MAX OBERHAUSEN", href: "https://lumenmax.de/" },
  { name: "GREEN MILE HEADSHOP", href: "https://greenmile-headshop.de/" },
  { name: "MEDUSAFILTERS", href: "https://medusafilters.de/" },
] as const;

export const MEDIA_PARTNER: iPartner[] = [
  { name: "Neuland Bochum" },
  { name: "Ruhrpotthiphop.com" },
  { name: "Superior Session" },
] as const;

export const PEOPLE_HOSTS: iPeople[] = [
  {
    displayName: "Lyrico",
    uri: "lyrico_official",
  },
  {
    displayName: "Proton",
    uri: "proton_endzeitfunk",
  },
] as const;

export const PEOPLE_ARTISTS: iPeople[] = [
  {
    displayName: "Akanni",
    uri: "akannihumphrey",
  },
  {
    displayName: "T.BONG",
    uri: "bongsville",
  },
  {
    displayName: "Big Toast",
    uri: "bigtoast_revorgrecords",
  },
  {
    displayName: "Tenchoo",
    uri: "therealtenchoo",
  },
  {
    displayName: "Lyrico",
    uri: "lyrico_official",
  },
  {
    displayName: "Rough Rabbit",
    uri: "rabbit_baut_den_beat",
  },
  {
    displayName: "Meller",
    uri: "meller_ttb",
  },
  {
    displayName: "MC Mirror",
    uri: "mirrorbeatz",
  },
  {
    displayName: "Proton",
    uri: "proton_endzeitfunk",
  },
  {
    displayName: "NGAH",
    uri: "n6ah_nk",
  },
  {
    displayName: "Min-D",
    uri: "m_drlgn",
  },
] as const;

export const PEOPLE_DJ: iPeople[] = [
  {
    displayName: "A guy called Criz",
    uri: "a_guy_called_criz",
  },
  {
    displayName: "Turkish Soulcat",
    uri: "turkishsoulcat",
  },
] as const;

export const PEOPLE_SOUND: iPeople[] = [
  {
    displayName: "A guy called Criz",
    uri: "fabrique_legere",
  },
] as const;

export const PEOPLE_FOOD: iPeople[] = [
  {
    displayName: "Tomek",
    uri: "tomek_untouchable",
  },
] as const;

export const PEOPLE_ORGANISATION: iPeople[] = [
  {
    displayName: "Tim Carry",
    uri: "timcarrydop",
  },
  {
    displayName: "S. Hatka",
    uri: "hatka_wip",
  },
  {
    displayName: "Proton",
    uri: "proton_endzeitfunk",
  },
] as const;
