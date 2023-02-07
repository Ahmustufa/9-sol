import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const Input = (props) => {
  const { control, name, length, label, pattern } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
        minLength: length,
        pattern: pattern
      }}
      render={({ field: { onChange, value } }) => (
        <TextInput onChange={onChange} value={value} label={label} />
      )}
    />
  );
};

export default Input;
const TextInput = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: grey !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #aa076b !important;
  }
`;
