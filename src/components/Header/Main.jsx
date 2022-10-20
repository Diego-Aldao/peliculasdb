import React from "react";
import styled from "styled-components";
import banner from "../../assets/banner.jpg";
import got from "../../assets/got.jpg";
import ContenidoHeader from "./ContenidoHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
  }
  @media (min-width: 480px) {
    img {
      object-fit: cover;
    }
  }
  &:after {
    position: absolute;
    top: 0px;
    left: 0px;
    content: "";
    width: 100%;
    height: 100%;
    background: #00000071;
  }
`;

const Header = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const sliderStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ImgBackground = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ img }) => `url(${img})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = () => {
  return (
    <Wrapper>
      <Header
        modules={[Parallax, Pagination]}
        pagination={{ clickable: true }}
        speed={800}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        parallax={true}
        className="mySwiper"
      >
        <SwiperSlide style={sliderStyles}>
          <ImgBackground
            data-swiper-parallax="75%"
            img={banner}
          ></ImgBackground>
          <ContenidoHeader data-swiper-parallax="725%" />
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <ImgBackground data-swiper-parallax="75%" img={got}></ImgBackground>
          <ContenidoHeader data-swiper-parallax="745%" />
        </SwiperSlide>
        <SwiperSlide style={sliderStyles}>
          <ImgBackground
            data-swiper-parallax="75%"
            img={banner}
          ></ImgBackground>
          <ContenidoHeader data-swiper-parallax="15%" />
        </SwiperSlide>
      </Header>
    </Wrapper>
    /*     <Header>
      <img src={banner} alt="" />
      <ContenidoHeader />
    </Header> */
  );
};

export default Main;
