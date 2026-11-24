import addinnImg from "../assets/images/addinn/ADDINN.png";
import awsImg from "../assets/images/AI_AWS.jpg";
import certifImg from "../assets/images/certif.png";
import fediImg from "../assets/images/Fedi.jpg";
import onboardifyImg from "../assets/images/logo3.png";
import tesaImg from "../assets/images/new10/tesa.jpg";
import tsypImg from "../assets/images/new12/tsyp1.jpg";
import iesImg from "../assets/images/new13/ies.jpg";
import nvidiaDliImg from "../assets/images/news14/nvidea1.jpg";
import maratechHackImg from "../assets/images/news15/hack.jpg";
import iastamMainImg from "../assets/images/news16/2.jpg";
import nvidiaAnomalyImg from "../assets/images/news17/nvidea2.jpg";
import biatMasterclassImg from "../assets/images/news18/biat-1.jpg";
import firmaaLaunchImg from "../assets/images/news19/firmaa-poster.jpg";
import doubleDegreeImg from "../assets/images/news20/3il-campus.jpg";
import bnsInternshipImg from "../assets/images/Portfolio/SmartHrmAi/smart-hrm-ai-cover.jpg";
import campusFlowNewsImg from "../assets/images/Portfolio/CampusFlow/campusflow-cover.jpg";
import callVerseNewsImg from "../assets/images/Portfolio/CallVerse/callverse-cover.jpg";
import houImg from "../assets/images/new8/Hou.png";
import nivineImg from "../assets/images/new9/nivine.png";
import ieeeImg from "../assets/images/news6/me 2.jpg";
import graduationImg from "../assets/images/pf1.png";

export const newsItems = [
  {
    id: 23,
    author: "Fedi Hmida",
    image: callVerseNewsImg,
    link: "/news/23",
  },
  {
    id: 22,
    author: "Fedi Hmida",
    image: campusFlowNewsImg,
    link: "/news/22",
  },
  {
    id: 21,
    author: "Fedi Hmida",
    image: bnsInternshipImg,
    link: "/news/21",
  },
  {
    id: 20,
    author: "Fedi Hmida",
    image: doubleDegreeImg,
    link: "/news/20",
  },
  {
    id: 19,
    author: "Fedi Hmida",
    image: firmaaLaunchImg,
    link: "/news/19",
  },
  {
    id: 18,
    author: "Fedi Hmida",
    image: biatMasterclassImg,
    link: "/news/18",
  },
  {
    id: 17,
    author: "Fedi Hmida",
    image: nvidiaAnomalyImg,
    link: "/news/17",
  },
  {
    id: 16,
    author: "Fedi Hmida",
    image: iastamMainImg,
    link: "/news/16",
  },
  {
    id: 15,
    author: "Fedi Hmida",
    image: maratechHackImg,
    link: "/news/15",
  },
  {
    id: 14,
    author: "Fedi Hmida",
    image: nvidiaDliImg,
    link: "/news/14",
  },
  {
    id: 13,
    author: "Fedi Hmida",
    image: iesImg,
    link: "/news/13",
  },
  {
    id: 12,
    author: "Fedi Hmida",
    image: tsypImg,
    link: "/news/12",
  },
  {
    id: 11,
    author: "Fedi Hmida",
    image: awsImg,
    link: "/news/11",
  },
  {
    id: 1,
    author: "Fedi Hmida",
    image: tesaImg,
    link: "/news/1",
  },
  {
    id: 2,
    author: "Fedi Hmida",
    image: nivineImg,
    link: "/news/2",
  },
  {
    id: 3,
    author: "Fedi Hmida",
    image: houImg,
    link: "/news/3",
  },
  {
    id: 4,
    author: "Fedi Hmida",
    image: addinnImg,
    link: "/news/4",
  },
  {
    id: 5,
    author: "Fedi Hmida",
    image: ieeeImg,
    link: "/news/5",
  },
  {
    id: 6,
    author: "Admin",
    image: addinnImg,
    link: "/news/6",
  },
  {
    id: 7,
    author: "Admin",
    image: onboardifyImg,
    link: "/news/7",
  },
  {
    id: 8,
    author: "Admin",
    image: certifImg,
    link: "/news/8",
  },
  {
    id: 9,
    author: "Admin",
    image: fediImg,
    link: "/news/9",
  },
  {
    id: 10,
    author: "Admin",
    image: graduationImg,
    link: "/news/10",
  },
];

/**
 * Merges the structural news data above with the translated copy held in
 * src/i18n/locales/*.json under `news.<id>`. `t` comes from useTranslation(),
 * passed in so this file stays a plain module.
 *
 * The "home" variant falls back to the full title/description when an entry
 * has no shorter home-specific variant, matching the previous behaviour.
 */
export const getNewsCards = (t, variant = "list") =>
  newsItems.map((item) => {
    const key = `news.${item.id}`;
    const home = variant === "home";
    const pick = (short, full) => {
      const value = home ? t(`${key}.${short}`, { defaultValue: "" }) : "";
      return value || t(`${key}.${full}`);
    };

    return {
      ...item,
      title: pick("homeTitle", "title"),
      description: pick("homeDescription", "description"),
      date: t(`${key}.date`),
    };
  });

export const getLatestNewsPreview = (t) => getNewsCards(t, "home").slice(0, 3);
