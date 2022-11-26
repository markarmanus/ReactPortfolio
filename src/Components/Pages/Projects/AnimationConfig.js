const rocketAnimations = {
  idle: () => {
    return {
      rotateX: [0, 20, 0],
      rotateZ: [0, 5, 0, -5, 0],
      transition: {
        rotateX: { duration: 1, ease: "linear", delay: 1, repeat: "Infinity" },
        rotateZ: { duration: 1, ease: "linear", delay: 1, repeat: "Infinity" },
      },
    };
  },
  generateStop: (newY, delay) => {
    return {
      y: newY,
      rotateX: [0, 20, 0, 0],
      rotateZ: [0, 5, 0, -5, 0],
      transition: {
        y: { duration: 2, delay: delay },
        rotateX: { duration: 1, ease: "linear", delay: delay, repeat: 1 },
        rotateZ: { duration: 1, ease: "linear", delay: delay, repeat: 1 },
      },
    };
  },
  stop: () => {
    return {
      rotateX: [null, 0],
      rotateZ: [null, 0],
      transition: {
        rotateX: { duration: 2, ease: "easeIn" },
        rotateZ: { duration: 2, ease: "easeIn" },
      },
    };
  },
};

const projectInformationCardVariants = {
  rocketClicked: (i) => {
    return {
      opacity: [0, 1],
      translateY: ["30%", "0%"],
      translateX: ["-30%", "0%"],
      transition: {
        duration: 0.75,
        delay: 2 + (i - 1) * 3.25, //3.25 is 2 + 1.25 (duration)
      },
    };
  },
};
const projectImageVariants = {
  rocketClicked: (i) => {
    return {
      opacity: [0, 1],
      translateX: ["30%", "0%"],
      transition: {
        duration: 0.75,
        delay: 2 + (i - 1) * 3.25 + 0.25,
      },
    };
  },
};
export { rocketAnimations, projectInformationCardVariants, projectImageVariants };
