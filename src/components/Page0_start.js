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
  ImageLink_0,
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
import downarrowImage from "../mainImg/downarrow.png";
const Page0 = () => {
  const pageNumber = 0;
  //ranking
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

  const [translatedContent, setTranslatedContent] = useState("");
  const [inputContent, setInputContent] = useState(""); // 사용자 입력 내용

  const handleTranslateClick = async () => {
    // 서버로 데이터를 전송하고 결과를 받아오는 코드를 작성
    try {
      const response = await fetch("서버 API 주소", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: inputContent }), // 사용자 입력 내용을 서버로 전송
      });

      if (response.ok) {
        const result = await response.json(); // 서버에서 받은 결과를 JSON으로 파싱
        setTranslatedContent(result.translatedContent); // 서버에서 받은 번역된 내용을 상태에 저장
      } else {
        console.error("서버 응답 오류");
      }
    } catch (error) {
      console.error("통신 오류:", error);
    }
  };

  return (
    <Container>
      <MainContent_0>
        <CenteredImage src={mainLogo} />
        <Title>트랜스밈</Title>
        <BoxContainer_0>
          <Box_input_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_input_0
              type="text"
              value={inputContent}
              onChange={(event) => setInputContent(event.target.value)}
            />
            {/* <ImageLink_0 to="/page0"> */}
            <Button_0 onClick={handleTranslateClick}>번역하기</Button_0>
            {/* </ImageLink_0> */}
          </Box_input_0>
          <DividerImage_0 src={translateButtonImage} alt="분리 이미지" />
          <Box_0>
            <BoxTitle_0></BoxTitle_0>
            <Box_Divider_0 />
            <BoxContent_0>{translatedContent}</BoxContent_0>
          </Box_0>
        </BoxContainer_0>
      </MainContent_0>

      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};

export default Page0;
