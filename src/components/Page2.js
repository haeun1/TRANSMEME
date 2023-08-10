// Page2.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, CenteredImage, Title } from "./TitleStyle";
import { Number, QuizBox, BlackText } from "./Page2Style";
import mainLogo from "../mainImg/mainlogo.png";

const Page2 = () => {
  const pageNumber = 2; // 페이지 번호를 변수로 설정
  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>신조어테스트</Title>
      <Number>
        <span>0</span>1
      </Number>
      <QuizBox>
        <BlackText>검정색 글씨</BlackText>
      </QuizBox>
      <NavLink to="/">메인 화면으로 이동</NavLink>
    </Container>
  );
};

export default Page2;
