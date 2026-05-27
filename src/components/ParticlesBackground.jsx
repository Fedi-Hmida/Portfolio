import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const getPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ParticlesBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion,
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "#070640",
        },
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onHover: {
            enable: !prefersReducedMotion,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.7,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#fe3e57",
        },
        links: {
          color: "#fe3e57",
          distance: 150,
          enable: true,
          opacity: 0.18,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: !prefersReducedMotion,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: prefersReducedMotion ? 14 : 35,
        },
        opacity: {
          value: prefersReducedMotion ? 0.22 : 0.45,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: false,
    }),
    [prefersReducedMotion],
  );

  return (
    <div aria-hidden="true">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
    </div>
  );
};

export default ParticlesBackground;
