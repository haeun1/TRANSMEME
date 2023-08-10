// Page2.js
import React from "react";
import { Container, CenteredImage, Title,Number,QuizBox,BlackText,
  BalanceContainer,balanceSelect,LeftButtonContainer,RightButtonContainer,VS,VSContainer} from "./TitleStyle";
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
        <BlackText>머선129?</BlackText>
      </QuizBox>
      <BalanceContainer>
        <LeftButtonContainer>
          <balanceSelect>무슨일이야?</balanceSelect>
        </LeftButtonContainer>
        <VSContainer>
        <VS>VS</VS>
        </VSContainer>   
        <RightButtonContainer>
          <balanceSelect>친구미선의<br />별명</balanceSelect>
        </RightButtonContainer>
      </BalanceContainer>
    </Container>
  );
};

export default Page2;
