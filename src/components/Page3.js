// Page3.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container, CenteredImage, Title, SmallImage_0, ImageLink, Divider_0, Group15, Image5, GenerationSelection
  , Group40, Line, Label, Wrapper, Rectangle19, Character, TextLabel, NWrapper, Rectangle20, NCharacter, NTextLabel, DCharacter, DTextLabel
  , DWrapper, Rectangle21, LWrapper, LCharacter, LTextLabel, Rectangle22,MCharacter,MRectangle,MTextLabel,MWrapper
} from "./TitleStyle";

import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";




const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  const [showGroup40, setShowGroup40] = useState(false); // state 추가

  const handleGroupClick = () => {
    setShowGroup40(!showGroup40); // showGroup40 토글
  };
  const tops = [424, 424, 465, 465, 505, 505, 545, 545, 585, 585];
  const lefts = [352, 543, 352, 543, 352, 543, 352, 543, 352, 543];
  const ntops = tops
  const nlefts = [892, 1083, 892, 1083, 892, 1083, 892, 1083, 892, 1083];
  const dtops = [765, 765, 806, 806, 846, 846, 886, 886, 926, 926]; 
  const dlefts = lefts
  const ltops = dtops
  const llefts = nlefts
  const mtops = dtops.map(top => top + 341);
  const mlefts = lefts 

  const [data, setData] = useState(null);

  let filteredWords = [];
  let subjectsAndIds = [];
  if (data) {
    filteredWords = data.words.filter(word => word.initial_sound === "ᄀ");
    subjectsAndIds = filteredWords.map(word => ({
      id: word.id,
      subject: word.subject
    }));
  }

  function MyComponent({ tops, lefts, start }) {
    return (
      <>
        {

          subjectsAndIds.map((item, index) => {
            const top = tops[index];
            const left = lefts[index];
            return (
              <Link key={item.id} to={`../page3_word/`}>
                <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
              </Link>
            );
          })}
      </>
    );
  }


  let nfilteredWords = [];
  let nsubjectsAndIds = [];
  if (data) {
    nfilteredWords = data.words.filter(word => word.initial_sound === "ᄂ");
    nsubjectsAndIds = nfilteredWords.map(word => ({
      id: word.id,
      subject: word.subject
    }));
  }

  function NMyComponent({ ntops, nlefts }) {
    return (
      <>
        {nsubjectsAndIds.map((item, index) => {
          const top = ntops[index];
          const left = nlefts[index];
          return (
            <Link key={item.id} to={`../page3_word/`}>
              <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
            </Link>
          );
        })}
      </>
    );
  }

  let dfilteredWords = [];
  let dsubjectsAndIds = [];
if (data) {
  dfilteredWords = data.words.filter(word => word.initial_sound === "ᄃ");
  dsubjectsAndIds = dfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function DMyComponent({ dtops, dlefts }) {
  return (
    <>
      {dsubjectsAndIds.map((item, index) => {
        const top = dtops[index];
        const left = dlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let lfilteredWords = [];
let lsubjectsAndIds = [];
if (data) {
  lfilteredWords = data.words.filter(word => word.initial_sound === "ᄅ");
  lsubjectsAndIds = lfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function LMyComponent({ ltops, llefts }) {
  return (
    <>
      {lsubjectsAndIds.map((item, index) => {
        const top = ltops[index];
        const left = llefts[index];
        return (
          <Link key={item.id} to={`../page3_word/`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}

let mfilteredWords = [];
let msubjectsAndIds = [];
if (data) {
  mfilteredWords = data.words.filter(word => word.initial_sound === "ᄆ");
  msubjectsAndIds = mfilteredWords.map(word => ({
    id: word.id,
    subject: word.subject
  }));
}

function MMyComponent({ mtops, mlefts }) {
  return (
    <>
      {msubjectsAndIds.map((item, index) => {
        const top = mtops[index];
        const left = mlefts[index];
        return (
          <Link key={item.id} to={`../page3_word/`}>
            <TextLabel style={{ top: `${top}px`, left: `${left}px`, width: '200px' }}>{item.subject}</TextLabel>
          </Link>
        );
      })}
    </>
  );
}




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



  if (!data) return <div>Loading...</div>;

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
        <MyComponent tops={tops} lefts={lefts} />
      </Wrapper>
      <NWrapper>
        <Rectangle20 />
        <NCharacter>ㄴ</NCharacter>
        <NMyComponent ntops={ntops} nlefts={nlefts} />
      </NWrapper>
      <DWrapper>
        <Rectangle21 />
        <DCharacter>ㄷ</DCharacter>
        <DMyComponent dtops={dtops} dlefts={dlefts} />
      </DWrapper>
      <LWrapper>
        <Rectangle22 />
        <LCharacter>ㄹ</LCharacter>
        <LMyComponent ltops={ltops} llefts={llefts} />
      </LWrapper>
      <MWrapper>
        <MRectangle/>
        <MCharacter>ㅁ</MCharacter>
        <MMyComponent mtops={mtops} mlefts={mlefts} />
      </MWrapper>
      
      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
    </Container>
  );
};




export default Page3;
