import React, { useState, useEffect } from "react";
import {
  Container,
  CenteredImage,
  Title,
  RankingContainer_0,
  Verticalbar_0,
  RankingContent_0,
  Ranking_0,
  ImageLink,
  SmallImage_0,
  MainContent_0,
  Box_Divider_0,
  Box_0,
  Box_input_0,
  BoxContainer_0,
  BoxContent_input_0,
  BoxContent_0,
  BoxTitle_0,
  DividerImage_0,
  Button_0,
  Divider_0,
  DictContainer_0,
  DictContent_Main_0,
  DictContent_0,
  DictContent_MainWord_0,
  DictContent_Word_0,
  DictContent_ex_0,
  DictContent_mean_0,
  DictContent_sen_0,
  DictContent_type_0,
  DictContent_word_0,
  Downarrow_0,
} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";
import translateButtonImage from "../mainImg/translate_btn.png";

const Page0 = () => {
  const pageNumber = 0;
  const [rankings, setRankings] = useState([]);
  const [currentRankingIndex, setCurrentRankingIndex] = useState(0);
  const initialRankings = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
    "Player 7",
    "Player 8",
    "Player 9",
    "Player 10",
  ];

  useEffect(() => {
    setRankings(initialRankings);
    const interval = setInterval(() => {
      setCurrentRankingIndex((prevIndex) =>
        prevIndex === initialRankings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    };
  }, []);
  return (
    <Container>
      <MainContent_0>
        <CenteredImage src={mainLogo} />
        <Title>트랜스밈</Title>
        <RankingContainer_0>
          <Verticalbar_0 />
          <RankingContent_0>많이 찾는 번역</RankingContent_0>
          <Ranking_0>
            {`${currentRankingIndex + 1}위: ${rankings[currentRankingIndex]}`}
          </Ranking_0>
        </RankingContainer_0>
        <BoxContainer_0>
          <Box_input_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_input_0>내용 1</BoxContent_input_0>
            <Button_0>번역하기</Button_0>
          </Box_input_0>
          <DividerImage_0 src={translateButtonImage} alt="분리 이미지" />
          <Box_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_0>내용 2</BoxContent_0>
          </Box_0>
        </BoxContainer_0>
      </MainContent_0>
      <Divider_0></Divider_0>
      <DictContainer_0>
        <DictContent_Main_0>
          <DictContent_MainWord_0>
            <DictContent_word_0>오나전</DictContent_word_0>
            <DictContent_type_0>(Z)</DictContent_type_0>
          </DictContent_MainWord_0>
          <DictContent_mean_0>
            ‘오나전’은 컴퓨터.휴대폰 자판을 두드리다 보면 누구나 쉽게 겪는
            ‘완전’의 오타다. 휴대전화와 컴퓨터 자판으로 ‘완전’이라는 글자를
            다급하게 칠 때 쉽게 범하는 실수다.
          </DictContent_mean_0>
        </DictContent_Main_0>
        <Downarrow_0>V</Downarrow_0>
        <DictContent_0>
          <DictContent_ex_0>
            예문<DictContent_sen_0>1. 와 저사람 오나전 쩐다.</DictContent_sen_0>
            <DictContent_sen_0>2. 와 저사람 오나전 쩐다.</DictContent_sen_0>
          </DictContent_ex_0>
          <DictContent_ex_0>
            다른세대 유사단어
            <DictContent_Word_0>
              <DictContent_word_0>캡</DictContent_word_0>
              <DictContent_type_0>(Z)</DictContent_type_0>
            </DictContent_Word_0>
            <DictContent_Word_0>
              <DictContent_word_0>대박</DictContent_word_0>
              <DictContent_type_0>(M)</DictContent_type_0>
            </DictContent_Word_0>
          </DictContent_ex_0>
        </DictContent_0>
      </DictContainer_0>
      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};

export default Page0;
