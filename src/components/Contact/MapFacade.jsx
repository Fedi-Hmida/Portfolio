import { ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { contactInfo } from "../../data/socialLinks";

const EMBED_URL = "https://maps.google.com/maps?q=Limoges%2C%20France&t=&z=12&ie=UTF8&iwloc=&output=embed";
const OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Limoges%2C%20France";

/**
 * A placeholder for the Google Maps embed. The real map (478 KB, ~15 requests, and
 * calls to Google before any consent) is inserted only when the visitor asks for it.
 * Both states share the same height, so nothing moves when the map loads.
 */
const MapFacade = () => {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return (
      <iframe
        title={t("contact.mapTitle")}
        src={EMBED_URL}
        className="h-full w-full border-0 opacity-80 contrast-125 grayscale invert filter transition-opacity duration-500 hover:opacity-100"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-darker-indigo px-6 text-center">
      <p className="flex items-center gap-2 text-xl font-semibold text-white">
        <MapPin className="h-6 w-6 text-primary-pink" aria-hidden="true" />
        {contactInfo.location}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setShowMap(true)}
          className="inline-flex min-h-11 items-center rounded-full bg-primary-pink px-6 text-sm font-bold text-ink transition-colors hover:bg-secondary-pink"
        >
          {t("contact.map.show")}
        </button>
        <a
          href={OPEN_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/50"
        >
          {t("contact.map.open")}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <p className="text-sm text-gray-400">{t("contact.map.note")}</p>
    </div>
  );
};

export default MapFacade;
