import styled from "styled-components";
import React from "react";
import UiContext from "../Contexts/UI";
import { motion, useAnimation } from "framer-motion";
import { COLORS } from "../Constants/COLOR";
const Container = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  display: block;
  position: relative;
`;

const Layer = styled.p`
  font-family: ${({ props }) => props.font};
  font-size: ${({ props }) => props.size};
  position: absolute;
  top: ${({ offset }) => offset || "50%"}px;
  left: ${({ offset }) => offset || "50%"}px;
  margin: 0;
`;
const Letter = styled(motion.span)`
  color: ${({ color }) => color};
  display: inline-block;
  white-space: break-spaces;
`;
function DoubleText(props) {
  const animation = ({ animationProps, key, originalColor }) => {
    if (!animationProps) return {};
    const {
      duration,
      repeat,
      absoluteDelay,
      scaleAnimation,
      opacityAnimation,
      translateAnimation,
      animationColor,
      delayBetweenLetters,
    } = animationProps;
    const delay = absoluteDelay
      ? absoluteDelay + key * (delayBetweenLetters || 0.1)
      : key * (delayBetweenLetters || 0.1);
    return {
      scale: scaleAnimation ? [0, 1] : 1,
      opacity: opacityAnimation ? [0, 1] : 1,
      translateX: translateAnimation ? ["-100%", "-50%", "0%"] : 0,
      translateY: translateAnimation ? ["50%", "0%", "-50%", "0%"] : 0,
      color: originalColor && animationColor ? [null, animationColor, originalColor] : null,
      transition: {
        delay,
        duration: duration || 1,
        repeat: repeat || 0,
        type: "spring",
        repeatDelay: absoluteDelay ? absoluteDelay : 0,
      },
    };
  };
  const layerVariants = {
    textAnimation: animation,
  };

  return (
    <Container width={props.width} height={props.height}>
      <Layer offset={props.offset} props={props}>
        {props.text.split("").map((letter, i) => {
          return (
            <Letter
              variants={layerVariants}
              custom={{ key: i, animationProps: props.animationProps }}
              key={i}
              color={props.firstColor}
            >
              {letter}
            </Letter>
          );
        })}
      </Layer>
      <Layer props={props}>
        {props.text.split("").map((letter, i) => {
          return (
            <Letter
              custom={{
                key: i,
                animationProps: props.animationProps,
                originalColor: props.secondColor,
              }}
              variants={layerVariants}
              key={i}
              color={props.secondColor}
            >
              {letter}
            </Letter>
          );
        })}
      </Layer>
    </Container>
  );
}

export default DoubleText;
