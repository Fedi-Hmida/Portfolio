import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = {
  location: "Tunis",
  email: "Fedi.Hmida@esprit.tn",
  phone: "+216 93 722 130",
  phoneHref: "tel:+21693722130",
  phoneCopy: "+216 93 722 130",
};

export const socialLinks = [
  {
    name: "Email",
    href: `mailto:${contactInfo.email}`,
    icon: Mail,
    heroClassName: "hero-social email",
    ariaLabel: "Email Fedi Hmida",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fedi-hmida/",
    icon: Linkedin,
    heroClassName: "hero-social linkedin",
    ariaLabel: "Open Fedi Hmida LinkedIn profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/Fedi-Hmida",
    icon: Github,
    heroClassName: "hero-social github",
    ariaLabel: "Open Fedi Hmida GitHub profile",
  },
  {
    name: "Phone",
    href: contactInfo.phoneHref,
    icon: Phone,
    heroClassName: "hero-social phone",
    ariaLabel: "Show Fedi Hmida phone number",
    action: "copy",
    displayValue: contactInfo.phone,
    copyValue: contactInfo.phoneCopy,
  },
];

export const contactActions = [
  {
    icon: FaWhatsapp,
    iconClassName: "text-3xl",
    name: "WhatsApp",
    description: "Fastest for quick coordination.",
    href: "https://wa.me/21693722130",
    color: "group-hover:text-whatsapp-green",
    borderColor: "group-hover:border-whatsapp-green",
  },
  {
    icon: Linkedin,
    iconClassName: "h-7 w-7",
    name: "LinkedIn",
    description: "Best for recruiters and professional messages.",
    href: "https://www.linkedin.com/in/fedi-hmida/",
    color: "group-hover:text-linkedin-blue",
    borderColor: "group-hover:border-linkedin-blue",
  },
  {
    icon: Mail,
    iconClassName: "h-7 w-7",
    name: "Email",
    description: "Best for detailed opportunities and documents.",
    href: `mailto:${contactInfo.email}`,
    color: "group-hover:text-primary-pink",
    borderColor: "group-hover:border-primary-pink",
  },
];
