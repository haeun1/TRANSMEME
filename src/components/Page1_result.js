// Page1.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  fontFace,
  Container,
  CenteredImage,
  Title,
  ImageLink,
  SmallImage_0,
  ColorTitle_1,
  Container_1,
  Title_1,
  Question_1,
  ButtonContainer_1,
  AgreeButtonContainer_1,
  DisAgreeButtonContainer_1,
  AgreeButton_1,
  DisagreeButton_1,
  AgreeContent_1,
  DisagreeContent_1,
  NextButton_1,
  MainContent_1,
  Type_1_result,
  Title_1_result,
  CenteredImage_1_result,
  TypeImage_1_result,
} from "./TitleStyle";
import mainButtonImage from "../mainImg/home_btn.png";
import mainLogo from "../mainImg/mainlogo.png";
import o_btn from "../mainImg/o_btn.png";
import x_btn from "../mainImg/x_btn.png";
import styled from "styled-components";

const Page1_result = () => {
  const pageNumber = 1; // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <MainContent_1>
        <CenteredImage_1_result src={mainLogo} />
        <Title_1_result>
          당신은&nbsp;<Type_1_result>"요즘꼰대"</Type_1_result>&nbsp;입니다
        </Title_1_result>
        <TypeImage_1_result></TypeImage_1_result>
      </MainContent_1>
      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};

export default Page1_result;
