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
    background: {
      // Your background image
      image: "url(https://blog.it-planet.com/wp-content/uploads/2023/06/netzwerkserver-herzstueck-infrastruktur.jpg)",
      size: "cover",
      repeat: "no-repeat",
      opacity: 1,
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 60
      },
      shape: {
        type: "circle"
      },
      color: {
        value: "#00ff00"
      },
      links: {
        enable: true,       // show linking lines
        distance: 150,
        color: { value: "#ffffff" },
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        outModes: {
          default: "out"    // let them come back, not destroyed
        },
        // turn off the polygon path:
        path: {
          enable: false
        },
        trail: {
          enable: true,
          length: 20,
          fill: {
            color: { value: "#000000" }
          }
        }
      }
    }
  };
  

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default MainBg;