import React from 'react';
import Particles from "react-tsparticles";

export default function HomeParticles(pros) {

    const particlesInit = (main) => {}
    const particlesLoaded = (container) => {};

    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: ["connect","grab"],
                },
                onClick: {
                    enable: false,
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 1,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      );

};
