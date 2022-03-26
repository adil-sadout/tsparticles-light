export const config1 = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 240,
    interactivity: {
      
      events: {
        onClick: {
          enable: true,
          mode: "pause",
        },
        onHover: {
          enable: true,
          mode: "grab",
          
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
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
        light: {
          area: {
            gradient: {
              start: {
                value: "#3b5e98"
              },
              stop: {
                value: "#17163e"
              }
            },
            radius: 1000
          },
          shadow: {
            color: {
              value: "#17163e"
            },
            length: 2000
          }
        },
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      
      color: {
        value: "#00852C",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
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
          area: 800,
        },
        value: 150,
      },
      opacity: {
        value: 0.5,
      },
      rotate: {
        value: 0,
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 5,
          sync: false
        }
      },
      shape: {
        type: "square",
        polygon:{
            sides:"4"
        }
      },
      size: {
        random: true,
        value: 15,
      },
      
    },
    detectRetina: true,
  }