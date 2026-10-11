/* -----------------------------------------------
   Particles.js — habs network field (light theme)
   Denser, higher-contrast Federation blues
   ----------------------------------------------- */

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 95,
        "density": {
          "enable": true,
          "value_area": 520
        }
      },
      "color": {
        "value": ["#086891", "#0b7fb8", "#3d9fd0", "#c98512"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.62,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.55,
          "opacity_min": 0.28,
          "sync": false
        }
      },
      "size": {
        "value": 3.6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 128,
        "color": "#0b7fb8",
        "opacity": 0.42,
        "width": 1.15
      },
      "move": {
        "enable": true,
        "speed": 0.55,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 170,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
