export const SITE = {
  name: "عوازل",
  url: "https://kuwaitigardens.com",
  logo: "/logo.png",
  description:
    "شركة عوازل لخدمات العزل المائي والحراري في الكويت. عزل الأسطح، عزل الحمامات، عزل المسابح، عزل الفوم (الرش الأمريكي)، العزل الفرنسي، والسكريد والصبة. حلول هندسية احترافية بمواد معتمدة.",
};

export const CONTACT = {
  whatsappNumber: "96560786063",
  phoneNumber: "+96560786063",
  phoneHref: "tel:+96560786063",
  whatsappMessage: "مرحباً، أرغب بالاستفسار عن خدمات العزل المائي والحراري",
  area: "الكويت - جميع المناطق",
  workingHours: "الأحد - الخميس: 8ص - 6م | الجمعة: 2م - 6م",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/wzlshrkh",
  snapchat: "https://www.snapchat.com/add/b_bd269233",
};

export const WHATSAPP_URL = (message?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message ?? CONTACT.whatsappMessage)}`;
