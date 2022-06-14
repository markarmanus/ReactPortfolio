const containerVariants = {
  hidden: { opacity: 0, transition: { duration: 2 } },
  rocketClicked: { opacity: 1, transition: { duration: 5 } },
};

const opacityAnimation = (delay) => {
  return {
    opacity: [0.1, 1, 0.1],
    transition: { duration: 3, ease: "linear", repeat: "Infinity", delay },
  };
};
const scaleAnimation = (delay) => {
  return {
    scale: [0.7, 1, 0.7],
    transition: { duration: 4, ease: "linear", repeat: "Infinity", delay },
  };
};
const rotateAnimatin = (delay) => {
  return {
    rotate: ["0deg", "30deg", "-30deg", "0deg"],
    transition: { duration: 4, ease: "linear", repeat: "Infinity", delay },
  };
};
const starAnimations = [opacityAnimation, scaleAnimation, rotateAnimatin];

export { starAnimations, containerVariants };
