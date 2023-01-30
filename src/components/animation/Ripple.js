import React from "react";
import styled from "styled-components";

const Ripple = (props) => {
  return <Ripples {...props}>{props.children}</Ripples>;
};

export default Ripple;
const Ripples = styled.div`
  animation: pulse 1s infinite ease;
  transition: 0.5s;
  @keyframes pulse {
    0% {
      transform: scale(0.9);
      /* opacity: 1; */
    }
    100% {
      transform: scale(1);
      /* opacity: 0; */
    }
  }
`;
