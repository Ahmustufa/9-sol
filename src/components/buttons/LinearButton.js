import React from "react";

const LinearButton = (props) => {
  return (
    <button
      type="button"
      {...props}
      class="text-white font-bold bg-gradient-to-r from-darkMagenta via-magenta to-magenta hover:bg-gradient-to-br shadow-sm shadow-gray dark:shadow-md dark:shadow-gray font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2"
    >
      {props.children}
    </button>
  );
};

export default LinearButton;
