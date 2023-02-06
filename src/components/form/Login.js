import React from "react";
import { Box, Grid, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import Text from "../Typography/Text";
import BlackButton from "../buttons/BlackButton";
import CircularProgress from "@mui/material/CircularProgress";
const Signup = () => {
  const [initState, setInitState] = React.useState({
    loading: false,
    success: false,
    error: false,
  });
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    // console.log(control);
    const onSubmit = ()=> {

    }
  return (
    <Form component="form">
        <div className="w-full rounded-md p-4 h-20 bg-gradient-to-r from-darkMagenta via-magenta to-magenta">
            <Text className="text-white" fontSize="22px">
                Login
            </Text>
        </div>
      <Stack spacing={2} p={5}>
        <Input label="Email" control={control} name="email" pattern={`/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`} />
        <Input label="Password" control={control} name="password" pattern={`/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/`} />
        {!initState?.loading ? (
            <BlackButton
              onClick={handleSubmit(onSubmit)}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Submit
            </BlackButton>
          ) : (
            <div className="flex justify-center items-center w-full">
              <CircularProgress color="secondary" />
            </div>
          )}
      </Stack>
    </Form>
  );
};

export default Signup;

const Form = styled(Box)`
/* padding: 20px; */
border-radius: 10px;
border: 1px solid grey;
`
