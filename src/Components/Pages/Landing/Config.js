import { COLORS } from "../../../Constants/COLOR";
const titleFontSize = {
  default: "6.5vw",
  max: "170px",
  min: "60px",
};
const describeFontSize = {
  default: "5vw",
  max: "120px",
  min: "50px",
};
const extFontSize = {
  default: "2vw",
  max: "70px",
  min: "15px",
};
// const titleFontSize = {
//   default: "6.5vw",
//   max: "6.5vw",
//   min: "6.5vw",
// };
// const describeFontSize = {
//   default: "5vw",
//   max: "5vw",
//   min: "5vw",
// };
// const extFontSize = {
//   default: "2vw",
//   max: "2vw",
//   min: "2vw",
// };
const TextConfig = {
  Name: {
    offset: 0.55,
    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-yellow"],
    size: titleFontSize.default,
    maxSize: titleFontSize.max,
    minSize: titleFontSize.min,
    font: "Pixeboy",
    height: "100%",
    animationProps: {
      animationColor: COLORS["main-green"],
      translateAnimation: true,
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 1,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "Mark Armanious",
  },
  Hi: {
    offset: 0.55,

    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-green"],
    size: describeFontSize.default,
    maxSize: describeFontSize.max,
    minSize: describeFontSize.min,
    font: "Pixeboy",
    height: describeFontSize.default,
    maxHeight: describeFontSize.max,
    minHeight: describeFontSize.min,
    animationProps: {
      animationColor: COLORS["main-yellow"],
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 1.7,
      opacityAnimation: true,
      delayBetweenLetters: 0.04,
    },
    text: "Hi,",
  },
  IamMark: {
    offset: 0.55,

    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-yellow"],
    size: describeFontSize.default,
    maxSize: describeFontSize.max,
    minSize: describeFontSize.min,
    font: "Pixeboy",
    height: describeFontSize.default,
    maxHeight: describeFontSize.max,
    minHeight: describeFontSize.min,
    animationProps: {
      animationColor: COLORS["main-green"],
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 1.9,
      opacityAnimation: true,
      delayBetweenLetters: 0.04,
    },
    text: "I'am Mark,",
  },
  SoftwareDeveloper: {
    offset: 0.55,

    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-yellow"],
    size: describeFontSize.default,
    maxSize: describeFontSize.max,
    minSize: describeFontSize.min,
    font: "Pixeboy",
    height: describeFontSize.default,
    maxHeight: describeFontSize.max,
    minHeight: describeFontSize.min,
    animationProps: {
      animationColor: COLORS["main-yellow"],
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 2.2,
      opacityAnimation: true,
      delayBetweenLetters: 0.04,
    },
    text: "Software Developer",
  },
  ReactExpert: {
    offset: 0,
    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-green"],
    size: extFontSize.default,
    maxSize: extFontSize.max,
    minSize: extFontSize.min,
    font: "Pixeboy",
    height: extFontSize.default,
    maxHeight: extFontSize.max,
    minHeight: extFontSize.min,
    animationProps: {
      animationColor: COLORS["main-yellow"],
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 2.2,
      opacityAnimation: true,
      delayBetweenLetters: 0.02,
    },
    text: "React - React Native Expert",
  },
  NotSupportedTitleProps: {
    offset: 0.25,
    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-yellow"],
    size: "20px",
    font: "Pixeboy",
    height: "100%",
    width: "100%",
    animationProps: {
      animationColor: COLORS["main-green"],
      translateAnimation: true,
      duration: 0.3,
      scaleAnimation: true,
      absoluteDelay: 1,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "Apologies!",
  },
  NotSupportedDetails1Props: {
    offset: 0,
    firstColor: "black",
    secondColor: "white",
    size: "16px",
    font: "Pixeboy",
    height: "100%",
    width: "100%",
    animationProps: {
      translateAnimation: true,
      duration: 0.01,
      scaleAnimation: true,
      absoluteDelay: 2.0,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "Due to the animations on the website,",
  },
  NotSupportedDetails2Props: {
    offset: 0,
    firstColor: "black",
    secondColor: "white",
    size: "16px",
    font: "Pixeboy",
    height: "100%",
    width: "100%",
    animationProps: {
      translateAnimation: true,
      duration: 0.01,
      scaleAnimation: true,
      absoluteDelay: 4.3,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "It was not possible to add support for Mobile Devices.",
  },
  NotSupportedDetails3Props: {
    offset: 0,
    firstColor: "black",
    secondColor: "white",
    size: "15px",
    font: "Pixeboy",
    height: "100%",
    width: "100%",
    animationProps: {
      translateAnimation: true,
      duration: 0.01,
      scaleAnimation: true,
      absoluteDelay: 7.5,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "Please revisit the website on a desktop.",
  },
  NotSupportedFinalMsg: {
    offset: 0.25,
    firstColor: COLORS["main-black"],
    secondColor: COLORS["main-yellow"],
    size: "16px",
    font: "Pixeboy",
    height: "100%",
    width: "100%",
    animationProps: {
      animationColor: COLORS["main-green"],
      translateAnimation: true,
      duration: 0.3,
      scaleAnimation: true,
      repeat: "Infinity",
      absoluteDelay: 9,
      opacityAnimation: true,
      delayBetweenLetters: 0.05,
    },
    text: "Looking forward to seeing you",
  },
};

const rocketIdleAnimation = {
  rotateZ: [0, 5, 0, -5, 0],
  translateY: [20, 80, 20],
  transition: {
    rotateZ: { ease: "linear", duration: 1, repeat: "Infinity" },
    translateY: { ease: "linear", duration: 3, repeat: "Infinity" },
  },
};
const rocketFlyUpAnimation = {
  rotateZ: [0, 5, 0, -5, 0],
  rotateX: [0, 20, 0],
  translateY: [null, window.innerHeight * -1],
  transition: {
    rotateZ: { ease: "linear", duration: 1, repeat: 3 },
    rotateX: { duration: 0.75, repeat: 4 },
    translateY: { ease: "easeOut", duration: 3, repeat: 0 },
  },
};
const AnimationConfig = {
  rocketAppearAnimation: {
    translateY: [200, 20],
    transition: { duration: 4 },
  },
  rocketVariants: {
    idle: rocketIdleAnimation,
    rocketClicked: rocketFlyUpAnimation,
  },
  mainContainerVariants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.7 } },
  },
  innerContainerVariants: {
    hidden: { opacity: 0, transition: { delay: 0.5, duration: 2 } },
    visible: { opacity: 1 },
  },
};

export { TextConfig, AnimationConfig };
