// Page3.js
import React, { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, CenteredImage, Title,SmallImage_0,ImageLink,Divider_0,Group15,Image5,GenerationSelection
,Group40,Line,Label,Wrapper,Rectangle19,Character,TextLabel,NWrapper,Rectangle20,NCharacter,NTextLabel,DCharacter,DTextLabel
,DWrapper,Rectangle21,LWrapper,LCharacter,LTextLabel,Rectangle22} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";

const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  const [showGroup40, setShowGroup40] = useState(false);  // state 추가

  const handleGroupClick = () => {
    setShowGroup40(!showGroup40);  // showGroup40 토글
  };

  const [data, setData] = useState({
    words: [],
    synonyms: [],
    examples: []
  });

  const groupedWords = data.words.reduce((acc, word) => {
    const firstLetter = word.subject.charAt(0);
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
  }, {});

  useEffect(() => {
    const apiUrl = 'http://52.79.219.32:8000/dictionary/apitest/'; // 여기에 Django API의 엔드포인트를 입력하세요.

    axios.get(apiUrl)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log("Error fetching data from Django API", error);
        });
}, []);

  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>도감</Title>
     
        <Group15 onClick={handleGroupClick}>
        <Image5 />
        <GenerationSelection>세대 선택</GenerationSelection>
        </Group15>
     
      <Divider_0></Divider_0>
      <Group40 style={{ display: showGroup40 ? "block" : "none" }}>
      <Line topPosition="301px" />
      <Line topPosition="344px" />
      <Line topPosition="389px" />
      <Label topPosition="272px" left="103px">X (70-80)</Label>
      <Label topPosition="314px">M (81-94)</Label>
      <Label topPosition="357px" width="139px">Z (95-2012)</Label>
    </Group40>
    <Wrapper>
      <Rectangle19 />
      <Character>ㄱ</Character>
      {groupedWords["가"] && groupedWords["가"].map(word => (
        <Link key={word.id} to="../page3_word">
          <TextLabel>{word.subject}</TextLabel>
        </Link>
      ))}
    </Wrapper>
    <NWrapper>
      <Rectangle20 />
      <NCharacter>ㄴ</NCharacter>
      <Link to="../page3_word"><NTextLabel top="421px" left="932px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="421px" left="1043px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="462px" left="932px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="462px" left="1043px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="502px" left="932px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="502px" left="1043px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="542px" left="932px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="542px" left="1043px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="582px" left="932px">가즈아</NTextLabel></Link>
      <Link to="../page3_word"><NTextLabel top="582px" left="1043px">가즈아</NTextLabel></Link>
    </NWrapper>
    <DWrapper>
      <Rectangle21 />
      <DCharacter>ㄷ</DCharacter>
      <Link to="../page3_word"><DTextLabel top="765px" left="392px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="765px" left="503px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="806px" left="392px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="806px" left="503px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="846px" left="392px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="846px" left="503px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="886px" left="392px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="886px" left="503px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="926px" left="392px">가즈아</DTextLabel></Link>
      <Link to="../page3_word"><DTextLabel top="926px" left="503px">가즈아</DTextLabel></Link>
    </DWrapper>
    <LWrapper>
      <Rectangle22 />
      <LCharacter>ㄹ</LCharacter>
      <Link to="../page3_word"><LTextLabel top="762px" left="932px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="762px" left="1043px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="803px" left="932px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="803px" left="1043px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="843px" left="932px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="843px" left="1043px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="883px" left="932px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="883px" left="1043px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="923px" left="932px">가즈아</LTextLabel></Link>
      <Link to="../page3_word"><LTextLabel top="923px" left="1043px">가즈아</LTextLabel></Link>
    </LWrapper>
      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
      </Container>
  );
};

export default Page3;
