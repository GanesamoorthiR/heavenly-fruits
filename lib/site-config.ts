export const siteConfig = {
  name: "Heavenly Fruits",
  tagline: "Freshness From The Hills of Kodaikanal",
  description:
    "Shop fresh Kodaikanal fruits, butter fruits, passion fruits, pure mountain honey, homemade chocolates and fresh hill vegetables from Heavenly Fruits.",
  location: "Kodaikanal, Tamil Nadu, India",
  whatsappNumber: "919363386868", // used for wa.me links (no + or spaces)
  whatsappDisplay: "+91 93633 86868",
  email: "prasmastrow46@gmail.com",
  whatsappLink: "https://wa.me/919363386868",
  url: "https://heavenlyfruits.vercel.app", // update after deployment
};

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
