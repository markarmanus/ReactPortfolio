import Landing from "./Components/Pages/Landing";
import styled from "styled-components";
import React from "react";
import { debounce } from "./Helpers/UI";
import { UIContextProvider } from "./Contexts/UI";
import { COLORS } from "./Constants/COLOR";
import { ToastContainer } from "react-toastify";
const Container = styled.div`
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
`;
const defaultDimensions = {
  height: window.innerHeight,
  width: window.innerWidth,
  smaller: window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight,
};

function App() {
  const [dimensions, setDimensions] = React.useState(defaultDimensions);
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        smaller: window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  const FallBackGround = styled.div`
    background-color: ${COLORS["main-blue"]};
  `;
  return (
    <UIContextProvider value={{ dimensions }}>
      <ToastContainer />
      <FallBackGround>
        <Container dimensions={dimensions}>
          <Landing />
        </Container>
      </FallBackGround>
    </UIContextProvider>
  );
}

export default App;
