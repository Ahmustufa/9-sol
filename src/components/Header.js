import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LinearButton from "./buttons/LinearButton";
import "@fontsource/poppins";
import Image from "next/image";
import Link from "next/link";
import Bounce from "./animation/Bounce";
import Modal from "@mui/material/Modal";
import ContactForm from "./form/ContactForm";
import CancelIcon from "@mui/icons-material/Cancel";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          {/* <div style={{position: "absolute", right: 710, top: 200, background: "white", borderRadius: 20}}> */}
          {/* </div> */}
          <ContactForm
            handleModalClose={handleClose}
            color="#aa076b"
            text="| We Are Here To Help"
            subtext="Talk To Us Now To Avail Amazing Discounts"
            // text="Chat with us to Avail 50% off"
          />
        </Box>
      </Modal>
      <Grid
        container
        spacing={4}
        // py={2}
        sx={{
          display: {
            xl: "flex",
            md: "none",
            lg: "flex",
            sm: "none",
            xs: "none",
          },
        }}
        bgcolor="#232A38"
        color="black"
      >
        <Grid item xs={5}>
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src={require("/public/images/logo/Dark-9Sol.png")}
                width={250}
                height={100}
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={3} className="flex justify-end items-center">
          <Image
            src={require("/public/images/US-Flag-icon.png")}
            width={45}
            height={100}
          />
          <a className="text-white px-4" href="tel:+13478538850">
            (347) 853-8850
          </a>
        </Grid>
        {/* <Grid item xs={1} className="flex justify-end items-center">
        <Typography className="text-white" >Live Chat</Typography>
      </Grid> */}
        <Grid item xs={3} className="flex justify-start items-center">
          <Bounce delay={1}>
            <LinearButton
              onClick={handleOpen}
              style={{ height: "50px", borderRadius: 30 }}
            >
              Get A Free Quote
            </LinearButton>
          </Bounce>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
