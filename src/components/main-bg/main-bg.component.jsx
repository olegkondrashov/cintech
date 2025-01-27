import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const MainBg = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container)
  };

  const options = {
    autoPlay: true,
        background: {
          color: { value: "#e3e3e3" },
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            opacity: 1,
            color: { value: "" },
          },
          enable: false,
        },
        clear: true,
        fullScreen: { enable: true, zIndex: -1 },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: { enable: false, mode: [] },
            onHover: {
              enable: true,
              mode: "light",
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: { delay: 0.5, enable: true },
          },
          modes: {
            light: {
              area: {
                gradient: {
                  start: { value: "#3b5e98" },
                  stop: { value: "#17163e" },
                },
                radius: 1000,
              },
              shadow: {
                color: { value: "#17163e" },
                length: 2000,
              },
            },
            // Add other modes as needed
          },
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              h: { enable: true, speed: 20, sync: true },
            },
          },
          number: {
            density: { enable: true, width: 1920, height: 1080 },
            value: 30,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            outModes: { default: "out" },
          },
          shape: {
            type: ["circle", "square"],
          },
          size: {
            value: { min: 15, max: 30 },
          },
          opacity: {
            value: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        motion: {
          disable: false,
          reduce: { factor: 4, value: true },
        },
  };
  

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute -z-10"
      />
    );
  }

  return <></>;
};

export default MainBg;