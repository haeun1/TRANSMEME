import React from "react";
import {
  Container,
  CenteredImage,
  Title,
  Number,
  QuizBox,
  BlackText,
  BalanceContainer,
  LeftButtonContainer,
  RightButtonContainer,
  VS,
  VSContainer,
  Divider_0,
  NotSelectContainer,
  SelectContainer,
  ImageContainer,
  MainContainer,
  ResultText,
  ResultContainer,
  ShareImageContainer,
  GoHomeBox,
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import o_ic from "../mainImg/o_ic.png";
import share_btn from "../mainImg/share_btn.png";

const Page2_result = () => {
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
        <MainContainer>
          <SelectContainer>무슨일이야?</SelectContainer>
          <ImageContainer>
            <img src={o_ic} alt="Image" />
          </ImageContainer>
        </MainContainer>

        <VSContainer>
          <VS>VS</VS>
        </VSContainer>
        <NotSelectContainer>
          친구미선의
          <br />
          별명
        </NotSelectContainer>
      </BalanceContainer>
      <Divider_0></Divider_0>

      <Number>
        <span>0</span>1
      </Number>
      <QuizBox>
        <BlackText>머선129?</BlackText>
      </QuizBox>
      <BalanceContainer>
        <MainContainer>
          <SelectContainer>무슨일이야?</SelectContainer>
          <ImageContainer>
            <img src={o_ic} alt="Image" />
          </ImageContainer>
        </MainContainer>

        <VSContainer>
          <VS>VS</VS>
        </VSContainer>
        <NotSelectContainer>
          친구미선의
          <br />
          별명
        </NotSelectContainer>
      </BalanceContainer>
      <Divider_0></Divider_0>

      <Number>
        <span>0</span>1
      </Number>
      <QuizBox>
        <BlackText>머선129?</BlackText>
      </QuizBox>
      <BalanceContainer>
        <MainContainer>
          <SelectContainer>무슨일이야?</SelectContainer>
          <ImageContainer>
            <img src={o_ic} alt="Image" />
          </ImageContainer>
        </MainContainer>

        <VSContainer>
          <VS>VS</VS>
        </VSContainer>
        <NotSelectContainer>
          친구미선의
          <br />
          별명
        </NotSelectContainer>
      </BalanceContainer>
      <Divider_0></Divider_0>

      <ResultContainer>
        <ResultText>내 점수는: 3점</ResultText>
        <ShareImageContainer>
          <img src={share_btn} alt="Image" />
        </ShareImageContainer>
      </ResultContainer>

      <GoHomeBox to="/home">
        <BlackText>홈으로</BlackText>
      </GoHomeBox>
    </Container>
  );
};

export default Page2_result;
