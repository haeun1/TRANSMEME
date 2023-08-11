
import React, { useState } from "react";
import { Container, CenteredImage, Title,SmallImage_0,ImageLink
,WordLabel,WordTranslationWrapper,ZLabel,Line27,Description,ExampleContent,ExampleTitle,ExampleWrapper
, Group41Wrapper,SimilarWordTitle,WordContent} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";

const Page3_word = () => {
 

  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>도감</Title>

      <WordTranslationWrapper>
      <WordLabel>가즈아</WordLabel>
      <ZLabel>(Z)</ZLabel>
      <Line27 />
    </WordTranslationWrapper>
    <Description>
      도박이나 투자에서 긍정적인 기대를 표현하는 감탄사이다. "가자."를 길게 발음한 것이며 과거 스포츠 도박 같은 것을 하는 사람들이 쓰던 말이다. 그러나 요즘에는 대중화되어 어떤 일에 대한 열망을 표현하는 데에 주로 사용된다
    </Description>

    <ExampleWrapper>
      <ExampleTitle>예문</ExampleTitle>
      <ExampleContent>
        밥 먹으러 가즈아 ~~ 콘서트 보러 가즈아 ~~ 공부하러 가즈아 ~~ 사진을 찍으러 가즈아 ~~ 어디든지 가쥬아~
      </ExampleContent>
    </ExampleWrapper>
    <Group41Wrapper>
      <SimilarWordTitle>다른 세대 유사 단어</SimilarWordTitle>
      <WordContent>ㄹㅊㄱ (Z) 돌진! (X)</WordContent>
    </Group41Wrapper>
      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
      </Container>
  );
};

export default Page3_word;
