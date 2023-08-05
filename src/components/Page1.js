// Page1.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, CenteredImage, Title, Divider } from "./TitleStyle";

const Page1 = () => {
  const pageNumber = 1; // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <CenteredImage src="img/Transmeme.png" />
      <Title>MZ테스트</Title>
      <Divider />
      <NavLink to="/">메인 화면으로 이동</NavLink>
    </Container>
  );
};

export default Page1;
