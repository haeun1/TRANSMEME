// Page1.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  fontFace,
  Container,
  CenteredImage_1_start,
  Title_1_start,
  ImageLink,
  SmallImage_0,
  MainContent_0,
  ColorTitle_1,
  InputContainer_1_start,
  InputField_1_start,
  InputLabel_1_start,
  InputLabelContainer_1_start,
  StartLink_1,
  Divider_0,
} from "./TitleStyle";
import mainButtonImage from "../mainImg/home_btn.png";
import mainLogo from "../mainImg/mainlogo.png";
import styled from "styled-components";

const Page1_start = () => {
  // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <MainContent_0>
        <CenteredImage_1_start src={mainLogo} />
        <Title_1_start>
          <ColorTitle_1>MZ</ColorTitle_1>테스트
        </Title_1_start>
      </MainContent_0>
      <InputContainer_1_start>
        <InputLabelContainer_1_start>
          <InputLabel_1_start>이름</InputLabel_1_start>
          <InputField_1_start type="text" />
        </InputLabelContainer_1_start>
        <InputLabelContainer_1_start>
          <InputLabel_1_start>나이</InputLabel_1_start>
          <InputField_1_start type="number" />
        </InputLabelContainer_1_start>
      </InputContainer_1_start>

      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
      <StartLink_1 to="/page1">시작하기</StartLink_1>
    </Container>
  );
};
export default Page1_start;
