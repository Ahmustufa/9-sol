import React from "react";
import styled from "styled-components";

const BlackButton = (props) => {
  return (
    <button
      {...props}
      type="button"
      class="text-white font-bold bg-gradient-to-r from-gray-dark via-gray-dark to-gray hover:bg-gradient-to-br shadow-md shadow-gray dark:shadow-md dark:shadow-gray font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {props.children}
    </button>
  );
};

export default BlackButton;
// const Button = styled.button`
// button:disabled,
// button[disabled]{
//   border: 1px solid #999999;
//   background-color: #cccccc;
//   color: #666666;
// }
// `