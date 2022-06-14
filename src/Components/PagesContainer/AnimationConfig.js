const loadingTextFirst = {
  opacity: [0, 1],
  transition: { duration: 0.75, delay: 0.4 },
};
const loadingTextSecond = {
  opacity: [1, 0],
  transition: { duration: 1.75, delay: 0 },
};
const loadingTextInitial = { opacity: 0 };

const loadingRocketFirstHalf = {
  translateX: ["-1vw", "50vw"],
  rotateX: [0, 20, 0],
  rotateZ: [0, 5, 0, -5, 0],
  transition: {
    translateX: { duration: 0.5, delay: 0.4 },
    rotateX: { duration: 0.75, repeat: 1, ease: "linear" },
    rotateZ: { duration: 0.75, repeat: 1, ease: "linear" },
  },
};
const loadingRocketSecondHalf = {
  translateX: ["50vw", "100vw"],
  rotateX: [null, 20, 0],
  rotateZ: [null, 5, 0, -5, 0],
  transition: {
    translateX: { duration: 0.5, delay: 0 },
    rotateX: { duration: 0.75, repeat: 2, delay: 0, ease: "linear" },
    rotateZ: { duration: 0.75, repeat: 2, delay: 0, ease: "linear" },
  },
};
const loadingRocketInitial = { translateX: "-1vw" };

const mainContainerVariants = {
  hidden: { translateY: "100vh" },
  rocketClicked: {
    translateY: ["100vh", "0vh"],
    transition: { delay: 0.5, duration: 3, ease: "easeOut" },
  },
};

const tabContainerVariants = {
  show: {
    scaleX: 1,
    originX: "0%",
    transition: { scaleX: { duration: 0.75, delay: 0 }, originX: { duration: 0 } },
  },
  hide: {
    scaleX: 0,
    originX: "100%",
    transition: { scaleX: { duration: 0.75 }, originX: { duration: 0 } },
  },
};
export {
  mainContainerVariants,
  tabContainerVariants,
  loadingRocketFirstHalf,
  loadingRocketSecondHalf,
  loadingTextFirst,
  loadingTextSecond,
  loadingRocketInitial,
  loadingTextInitial,
};
