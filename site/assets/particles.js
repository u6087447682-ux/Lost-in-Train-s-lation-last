tsParticles.load("particles", {
  particles: {
    number: { value: 60 },
    color: { value: "#bfae9c" },
    opacity: { value: 0.4 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 0.6
    },
    links: {
      enable: true,
      color: "#cdbfae",
      opacity: 0.2,
      distance: 140
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }
    }
  },
  detectRetina: true
});
