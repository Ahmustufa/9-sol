import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: max-content;
  margin: auto;
  position: relative;
  border: 1px solid white;
  color: white;
  .item {
    padding: 12px 24px;
    cursor: pointer;
    transition: 0.6s;
    text-align: center;
  }
  @media (max-width: 414px) {
    width: min-content;
    text-overflow: clip;
    justify-content: center;
  }
  .active {
    color: black;
    z-index: 10;
  }

  .slider {
    position: absolute;
    top: 0px;
    transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 100%;
    z-index: 0;
  }

  /* margin: 0px 10px; */
  @media (max-width: 576px) {
    .item {
      font-size: 12px;
      padding: 16px 8px;
    }
  }
  @media (max-width: 742px) and (min-width: 580px) {
    .item {
      font-size: 16px;
      padding: 12px 10px;
    }
  }
`;

const MultiSwitchWrapper = (props) => {
  const { options, onChange } = props;
  // console.log("options", options);
  const [state, setState] = useState(0);

  const optionsRef = useRef([{}]);
  const containerRef = useRef({});

  const [divWidth, setDivWidth] = useState();
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    setDivWidth(optionsRef.current[0]?.clientWidth);
  }, []);

  return (
    <StyledContent ref={containerRef}>
      {options.map((item, index) => (
        <div
          key={index}
          ref={(e) => (optionsRef.current[index] = e)}
          className={`item ${state === index ? "active" : ""}`}
          onClick={() => {
            setState(index);
            onChange(item.value);
            setDivWidth(optionsRef.current[index]?.clientWidth);
            setOffsetLeft(optionsRef.current[index]?.offsetLeft);
          }}
          // style={{ width: `calc(100% / ${options.length})` }}
        >
          {item.label}
        </div>
      ))}
      <div
        className="slider"
        style={{
          // left: `${divWidth * state}px`,
          left: `${offsetLeft}px`,
          width: divWidth,
        }}
      />
    </StyledContent>
  );
};

MultiSwitchWrapper.defaultProps = {
  options: [],
  onChange: () => {},
};

export default MultiSwitchWrapper;
