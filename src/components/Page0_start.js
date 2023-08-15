import React, { useState, useEffect } from "react";
import axios from "axios"; // axios를 import
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
  Downcontainer_0,
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

  useEffect(() => {
    // 서버에서 초기 랭킹 데이터를 받아와서 상태에 저장
    axios
      .get("http://52.79.219.32:8000/initial-rankings") // 서버의 API 주소에 맞게 변경
      .then((response) => {
        setRankings(response.data.initialRankings); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching initial rankings:", error);
      });

    // 랭킹 변경을 위한 인터벌 설정
    const interval = setInterval(() => {
      setCurrentRankingIndex((prevIndex) =>
        prevIndex === rankings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => {
      clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    };
  }, []);

  const [inputContent, setInputContent] = useState(""); // 입력한 내용
  const [translatedContent, setTranslatedContent] = useState(""); // 번역 결과
  const [translatedValue, setTranslatedValue] = useState(null); // 번역 결과를 상태로 관

  // 번역 버튼 클릭 핸들러
  const handleTranslateClick = () => {
    // 입력한 내용과 API 주소를 이용하여 서버에 요청 보내기
    axios
      .get(
        "http://52.79.219.32:8000/dictionary/apitest/?format=json ",
        {
          subject: inputContent,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 서버로부터 받은 번역 결과 설정
        const translated = response.data.words.find(
          (words) => words.subject === inputContent
        );
        if (translated) {
          setTranslatedContent(translated.standard);
          setTranslatedValue(translated);
        } else {
          setTranslatedContent("해당 단어의 번역이 없습니다.");
        }
      })
      .catch((error) => {
        console.error("Error during translation:", error);
      });
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
      {translatedValue !== null && (
        <DictContainer_0>
          <DictContent_Main_0>
            <Downcontainer_0>
              <Downarrow_0 src={downarrowImage}></Downarrow_0>
              <Downarrow_0 src={downarrowImage}></Downarrow_0>
            </Downcontainer_0>

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

          <DictContent_0>
            <DictContent_ex_0>
              예문
              <DictContent_sen_0>1. 와 저사람 오나전 쩐다.</DictContent_sen_0>
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
      )}

      <ImageLink to="/home">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};

export default Page0;
