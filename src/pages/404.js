import React from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Text from "@/components/Typography/Text";
import LinearButton from "@/components/buttons/LinearButton";
import Link from "next/link";

function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Image
              alt="404"
              height="300"
              src={require("/public/images/404/404-error.jpg")}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} display="flex" justifyContent="center" mb={4}>
            <Text variant="h4">The page you're looking for doesn't exist.</Text>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} display="flex" justifyContent="center">
            <LinearButton style={{ padding: 10 }}>
              <Link href="/" >
                Back Home
              </Link>
            </LinearButton>
          </Grid>
        </Grid>
      </Container>
     
    </Box>
  );
}

export default Error;
