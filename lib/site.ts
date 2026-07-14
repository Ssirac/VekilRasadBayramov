/**
 * Language-independent site constants.
 * Centralised so the phone number, WhatsApp link and email render IDENTICALLY
 * in the nav, contact section and footer — a single source of truth.
 */
export const site = {
  name: "Rəşad Bayramov",
  title: "Vəkil",
  bureau: "PRESEDENT Vəkil Bürosu",
  bureauUpper: "PRESEDENT VƏKİL BÜROSU",

  phoneDisplay: "+994 55 788 58 48",
  phoneTel: "tel:+994557885848",

  // WhatsApp is the primary contact channel.
  whatsappNumber: "994557885848",
  // Pre-filled WhatsApp consultation message.
  whatsapp:
    "https://wa.me/994557885848?text=Salam%2C%20konsultasiya%20üçün%20yazıram",

  // TODO(client): replace "Bakı" with the exact street address once confirmed.
  location: "Bakı",

  hours: "B.e–Cümə, 09:00–18:00",

  portrait: "/images/resad-bayramov.png",
  portraitAlt: "Rəşad Bayramov — vəkil, PRESEDENT Vəkil Bürosu, Bakı",
  initials: "RB",

  // TODO(client): save the gold logo here as logo.png (falls back to an RB mark).
  logo: "/images/logo.png",
  logoAlt: "Vəkil Rəşad Bayramov — logo",
} as const;

export type Lang = "az" | "en";
