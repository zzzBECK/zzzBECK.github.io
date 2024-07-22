import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../theme-provider";

export function ParticleLight() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      if (container) {
        container.addClickHandler(() => {
          // Check total particles and only add new if under a certain amount
          if (container.particles.count < 50) {
            // Example limit
            container.particles.push(1); // Push 4 particles when clicked
          }
        });
      }
    },
    []
  );

  const particleColor = theme === "light" ? "#d1cfcf" : "#38424b"; // Adjust colors based on theme

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 75,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: "#96b2ca",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0.7,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: 50,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
