import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Box, Dialog } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
const StyledCard = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e8dfdf;
  border-radius: 4px;
  transition: 0.4s;

  .screen {
    display: flex;
    //   width: 300px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
  }
  .screen img {
    top: 0;
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -999;
    margin: 0;
    padding: 0;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
  }
  .screen:hover img {
    top: -${(props) => props.imageHeight}px;
    -webkit-transition: all 5s;
    -moz-transition: all 5s;
    -ms-transition: all 5s;
    -o-transition: all 5s;
    transition: all 5s;
  }

  .preview-btn {
    display: none;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    padding: 8px 0;
    width: 100px;
    border-radius: 6px;
    transition: all 0.4s;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    z-index: 999;
    &:hover {
      background-color: #aa076b;
      border: 1px solid #aa076b;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    .preview-btn {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 215px;
  }

  @media only screen and (max-width: 768px) {
    height: 180px;
  }

  @media only screen and (max-width: 576px) {
    .preview-btn {
      font-size: 14px;
      width: 84px;
    }
  }
`;

const PreviewCard = ({ image, link }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageHeight, setImageHeight] = useState("");

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const onImgLoad = ({ target: img }) => {
    setImageHeight(img.offsetHeight - 300);
  };
  return (
    <>
      <Dialog scroll="paper" open={modalVisible} onClose={handleModalClose}>
        <div style={{ backgroundColor: "#aa076b" }}>
          <AiOutlineClose
            style={{ marginLeft: "auto" }}
            onClick={handleModalClose}
            color="white"
            fontSize={22}
          />
        </div>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img alt="img" src={image} />
        </Box>
        <div style={{ backgroundColor: "#aa076b", padding: 10 }}>
        
        </div>
        {/* <Image src={image} style={{height:'100%',width:'100%'}}width="100%" height="100%" /> */}
      </Dialog>
      <StyledCard className="" imageHeight={imageHeight}>
        <button className="preview-btn" onClick={handleModalOpen}>
          Preview
        </button>
        <div class="fixed-container screen">
          {/* <img onLoad={onImgLoad} src={image} /> */}
          <Image
            onLoad={onImgLoad}
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </StyledCard>
    </>
  );
};

export default PreviewCard;
