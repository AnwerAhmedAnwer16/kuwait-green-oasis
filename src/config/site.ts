export const SITE = {
  name: "كويتي جاردنز",
  url: "https://kuwaitigardens.com",
  logo: "/logo.png",
  description:
    "كويتي جاردنز لخدمات الزراعة وتنسيق الحدائق. زرع وتوريد الأشجار والنخيل، تلقيح وتكريب نخيل، إزالة الأشجار، وتركيب الثيل الصناعي وأنظمة الري المتطورة في الكويت.",
};

export const CONTACT = {
  whatsappNumber: "96566101619",
  phoneNumber: "+96566101619",
  phoneHref: "tel:+96566101619",
  whatsappMessage: "مرحباً، أرغب بالاستفسار عن خدمات تنسيق الحدائق",
  area: "الكويت",
  workingHours: "الأحد - الخميس: 8ص - 6م",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/tnsyq231/",
  snapchat: "https://www.snapchat.com/@abaas20265527?share_id=EekkXiGAUbU&locale=ar-KW",
};

export const WHATSAPP_URL = (message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message ?? CONTACT.whatsappMessage)}`;
