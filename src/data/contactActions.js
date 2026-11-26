import { Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "./socialLinks";

// The Contact page's action cards. Kept apart from socialLinks.js (which Home imports)
// so the WhatsApp icon from react-icons loads with the Contact page, not on first paint.
export const contactActions = [
  {
    icon: FaWhatsapp,
    iconClassName: "text-3xl",
    name: "WhatsApp",
    key: "whatsapp",
    href: "https://wa.me/33602753287",
    color: "group-hover:text-whatsapp-green",
    borderColor: "group-hover:border-whatsapp-green",
  },
  {
    icon: Linkedin,
    iconClassName: "h-7 w-7",
    name: "LinkedIn",
    key: "linkedin",
    href: "https://www.linkedin.com/in/fedi-hmida/",
    color: "group-hover:text-linkedin-blue",
    borderColor: "group-hover:border-linkedin-blue",
  },
  {
    icon: Mail,
    iconClassName: "h-7 w-7",
    name: "Email",
    key: "email",
    href: `mailto:${contactInfo.email}`,
    color: "group-hover:text-primary-pink",
    borderColor: "group-hover:border-primary-pink",
  },
];
