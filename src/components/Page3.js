// Page3.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, CenteredImage, Title, Divider } from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";

const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>도감</Title>
      <Divider />
      <NavLink to="/">메인 화면으로 이동</NavLink>
    </Container>
  );
};

export default Page3;
