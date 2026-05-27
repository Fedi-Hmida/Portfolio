import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fallbackCopyText = (value) => {
  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  textArea.setSelectionRange(0, value.length);

  const didCopy = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!didCopy) {
    throw new Error("Copy command failed");
  }
};

const copyText = async (value) => {
  if (
    typeof navigator !== "undefined" &&
    typeof window !== "undefined" &&
    window.isSecureContext &&
    navigator.clipboard?.writeText
  ) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch {
      fallbackCopyText(value);
      return;
    }
  }

  fallbackCopyText(value);
};

const SocialIconLink = ({
  social,
  className,
  animated = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("idle");
  const timeoutRef = useRef(null);
  const SocialIcon = social.icon;
  const isExternal = social.href.startsWith("http");
  const isCopyAction = social.action === "copy";
  const IconButton = animated ? motion.button : "button";
  const IconLink = animated ? motion.a : "a";

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    try {
      await copyText(social.copyValue || social.displayValue);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }

    timeoutRef.current = window.setTimeout(() => setCopyStatus("idle"), 2200);
  };

  if (!isCopyAction) {
    return (
      <IconLink
        {...(animated
          ? {
              whileHover: { scale: 1.2, rotate: 10 },
              whileTap: { scale: 0.9 },
            }
          : {})}
        href={social.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={className}
        aria-label={social.ariaLabel || `Open ${social.name}`}
      >
        <SocialIcon
          aria-hidden="true"
          className="h-[1em] w-[1em]"
          strokeWidth={2.1}
        />
      </IconLink>
    );
  }

  return (
    <span className="relative inline-flex">
      <IconButton
        {...(animated
          ? {
              whileHover: { scale: 1.2, rotate: 10 },
              whileTap: { scale: 0.9 },
            }
          : {})}
        type="button"
        className={`${className} cursor-pointer bg-transparent`}
        aria-label={social.ariaLabel || `Copy ${social.name}`}
        aria-expanded={isOpen}
        onClick={() => {
          setCopyStatus("idle");
          setIsOpen(true);
        }}
      >
        <SocialIcon
          aria-hidden="true"
          className="h-[1em] w-[1em]"
          strokeWidth={2.1}
        />
      </IconButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-indigo/70 px-4 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Copy phone number"
              className="w-full max-w-md rounded-2xl border border-white/10 bg-darker-indigo/95 p-6 text-center shadow-2xl shadow-black/40"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-3xl text-green-400">
                <SocialIcon
                  aria-hidden="true"
                  className="h-8 w-8"
                  strokeWidth={2.1}
                />
              </div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-primary-pink">
                Phone number
              </span>
              <span className="mt-3 block select-all rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-xl font-bold tracking-wide text-white sm:text-2xl">
                {social.displayValue}
              </span>
              <p className="mt-3 text-sm text-gray-400">
                Copy my number and contact me directly for opportunities or
                project discussions.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 rounded-full bg-primary-pink px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-pink/90 focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-darker-indigo"
                >
                  {copyStatus === "copied"
                    ? "Copied"
                    : copyStatus === "failed"
                      ? "Select Number"
                      : "Copy Number"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-gray-200 transition hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-pink/70 focus:ring-offset-2 focus:ring-offset-darker-indigo"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default SocialIconLink;
