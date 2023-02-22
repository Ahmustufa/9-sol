import React from "react";
import { HashLoader, PuffLoader } from "react-spinners";
import styled from "styled-components";
function HashLoading() {
  return (
    <StyledDiv>
      <PuffLoader  color="#aa076b" size={100} />
    </StyledDiv>
  );
}

export default HashLoading;

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #273444;
`;
