import styled from "styled-components";

import { Button } from "@mui/material";

export const BlueButtonWrapper = styled(Button)`
  margin: 0;
  color: ${(props) => props.color ?? "#aa076b"};
  background-color: ${(props) => props.backgroundColor ?? "#fff"};
  border: ${(props) => props.border ?? "2px solid #aa076b"};
  border-radius: ${(props) => props.borderRadius ?? "4px"};
  outline: none;
  box-shadow: none;
  font-weight: 600;
  width: ${(props) => props.width ?? "100%"};
  padding: ${(props) => props.padding ?? "20px 36px"};
  font-size: 18px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    background: #acacac;
    color: #21262c;
  }

  &:focus {
    color: ${(props) => props.color ?? "#fff"};
    background-color: ${(props) => props.backgroundColor ?? "#aa076b"};
    border: ${(props) => props.border ?? "2px solid #aa076b"};
  }

  &:hover {
    opacity: 0.8;
    background-color: ${(props) => props.hoverBackgroundColor ?? "#fff"};
    border: ${(props) => props.border ?? "2px solid #aa076b"};
    color: ${(props) => props.hoverColor ?? "#aa076b"};
    // font-weight: ${(props) => props.fontWeight ?? "500"};
  }
`;

export const SignupButtonWrapper = styled.button`
  margin: 0;
  color: ${(props) => props.color ?? "#fff"};
  background-color: ${(props) => props.backgroundColor ?? "#aa076b"};
  border: ${(props) => props.border ?? "2px solid #aa076b"};
  border-radius: 100px;
  padding: 6px 12px;
  width: ${(props) => props.width ?? "200px"};
  outline: none;
  box-shadow: none;
  font-weight: 400;
  font-size: 14px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    background: #acacac;
    color: #21262c;
  }

  &:focus {
    color: ${(props) => props.color ?? "#fff"};
    background-color: ${(props) => props.backgroundColor ?? "#aa076b"};
    border: ${(props) => props.border ?? "2px solid #aa076b"};
  }

  &:hover {
    opacity: 0.8;
    background-color: ${(props) => props.hoverBackgroundColor ?? "#fff"};
    border: ${(props) => props.border ?? "2px solid #aa076b"};
    color: ${(props) => props.hoverColor ?? "#aa076b"};
    color: ${(props) =>
      props.hoverColor != "#f4f4f4" ? "#aa076b" : "#21262C"};
    // font-weight: ${(props) => props.fontWeight ?? "500"};
  }

  &[disabled] {
    color: #fff;
    border: 2px solid dimgray;
    cursor: not-allowed !important;
    background-color: dimgray;
    opacity: 0.4;
    &:hover {
      color: #fff;
      background-color: dimgray;
      opacity: 0.4;
    }
  }
`;

export const InsideSignupButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 100px;
  border: 0px;
  background-color: #fff;
  position: relative;
  right: 32px;
  outline: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  color: #aa076b;
`;

export const HeaderLink = styled.a`
  background-color: transparent;
  transition: all 0.4s ease 0s;
  padding: 10px 16px;
  font-size: 12px;
  color: #fff;
  border: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
  box-shadow: none;
  text-decoration: none;

  :hover {
    background-color: #ffa930;
    color: #fff;
    svg {
      color: #fff;
    }
  }

  svg {
    transition: all 0.4s ease 0s;
    margin-right: 6px;
    color: #acacac;
  }
`;

export const PrimaryButton = styled.button`
  transition: all 0.4s ease 0s;
  padding: 8px 20px;
  color: ${({ color }) => (color != undefined ? color : "#fff")};
  border: 1px solid
    ${({ bgColor }) => (bgColor != undefined ? bgColor : "#D33F49")};
  border-radius: 2px;
  font-size: 13px;
  outline: none;
  box-shadow: none;
  background-color: ${({ bgColor }) =>
    bgColor != undefined ? bgColor : "#D33F49"};

  :hover {
    border-color: ${({ color }) => (color == "#fff" ? `#050607` : "#fff")};
    color: ${({ color }) => (color == "#fff" ? `#050607` : "#fff")};
    background-color: transparent;
  }
`;
// export const TabButton = styled.button``;

const StyledSwipeButton = styled.button`
  height: 60px;
  line-height: 60px;
  width: 185px;
  // padding: 0 48px;
  font-weight: 600;
  // border: none;
  box-shadow: none;
  outline: none;
  border-radius: 6px;
  background-color: #26262a;
  position: relative;
  overflow: hidden;
  border: 1px solid #26262a;
  transition: ease 0.4s;

  .children {
    color: #fff;
    transition: ease 0.4s;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  .after {
    color: #26262a;
    height: 150%;
    margin-top: -12px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 0px;
    visibility: hidden;
    transition: ease 0.4s;
    font-weight: 600;
    transform: skew(0deg, 8deg);
    transition: ease 0.4s;
  }

  :hover {
    .after {
      visibility: visible;
      top: 0px;
      // transform: skew(0deg);
      transition: ease 0.4s;
      font-size: 20px;
    }

    .children {
      // top: -100%;
      transition: ease 0.4s;
      color: #26262a;
      z-index: 200;
    }
  }
`;

export const SwipeButton = (props) => {
  const { children, after } = props;
  return (
    <StyledSwipeButton {...props}>
      <span className="children">{children}</span>
      <span className="after"></span>
    </StyledSwipeButton>
  );
};
