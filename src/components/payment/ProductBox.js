import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import Image from "next/image";
import Text from "../Typography/Text";
import { Divider } from "@mui/material";

export default function ProductBox({count, setCount}) {
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: "action.active",
        "& > *": {
          mt: 2,
        },
        // "& .MuiBadge-root": {
        //   marginRight: 4,
        // },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count} >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <Image
              src={require("/public/images/web_design/03.webp")}
              width={110}
              height={50}
              alt="productimage"
            />
          </div>
        </Badge>
          <Divider/>  
        <Box display="flex" mt={2}>
          <Text color="black">Amount</Text>
          <div style={{marginLeft: 'auto'}}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                sx={{borderRadius: 20, borderColor: "black"}}
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
              >
                <RemoveIcon sx={{color: "#aa076b"}} fontSize="small" />
              </Button>
              <Button
                sx={{borderRadius: 20, borderColor: "black"}}

                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon sx={{color: "#aa076b"}} fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
        </Box>
      </div>
    </Box>
  );
}
