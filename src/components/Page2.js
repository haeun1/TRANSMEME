// Page2.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, CenteredImage, Title, Divider } from "./TitleStyle";

const Page2 = () => {
  const pageNumber = 2; // 페이지 번호를 변수로 설정
  return (
    <Container>
      <CenteredImage src="img/Transmeme.png" />
      <Title>신조어테스트</Title>
      <Divider />
      <NavLink to="/">메인 화면으로 이동</NavLink>
    </Container>
  );
};

export default Page2;
