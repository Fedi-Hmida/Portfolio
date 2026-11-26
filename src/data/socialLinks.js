import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const contactInfo = {
  location: "Limoges, France",
  email: "hmidaf@3il.fr",
  phone: "+33 6 02 75 32 87",
  phoneHref: "tel:+33602753287",
  phoneCopy: "+33 6 02 75 32 87",
};

export const socialLinks = [
  {
    name: "Email",
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
    heroClassName: "hero-social email",
    ariaLabelKey: "social.email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fedi-hmida/",
    icon: Linkedin,
    heroClassName: "hero-social linkedin",
    ariaLabelKey: "social.linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/Fedi-Hmida",
    icon: Github,
    heroClassName: "hero-social github",
    ariaLabelKey: "social.github",
  },
  {
    name: "Phone",
    href: contactInfo.phoneHref,
    icon: Phone,
    heroClassName: "hero-social phone",
    ariaLabelKey: "social.phone",
    action: "copy",
    displayValue: contactInfo.phone,
    copyValue: contactInfo.phoneCopy,
  },
];
