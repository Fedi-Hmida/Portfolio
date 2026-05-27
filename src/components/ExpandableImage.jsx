import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const ExpandableImage = ({ alt = "Image", className = "", src, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const openPreview = () => setIsOpen(true);

  return (
    <>
      <img
        {...props}
        src={src}
        alt={alt}
        role="button"
        tabIndex={0}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPreview();
          }
        }}
        className={`${className} cursor-zoom-in`}
        aria-label={`View ${alt} larger`}
      />

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} preview`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-h-full w-full max-w-6xl rounded-[1.75rem] border border-white/15 bg-[#080744] p-4 shadow-2xl shadow-black/40"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="line-clamp-2 text-sm font-bold uppercase tracking-[0.18em] text-pink-200">
                  {alt}
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-pink-300/70 hover:text-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300/70"
                  aria-label="Close image preview"
                >
                  <FaTimes />
                </button>
              </div>
              <img
                src={src}
                alt={alt}
                className="max-h-[82vh] w-full rounded-2xl object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ExpandableImage;
