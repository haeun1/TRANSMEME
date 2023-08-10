// Page3.js
import React from "react";
import { Container, CenteredImage, Title,SmallImage_0,ImageLink,Divider_0,Group15,Image5,GenerationSelection} from "./TitleStyle";
import mainLogo from "../mainImg/mainlogo.png";
import mainButtonImage from "../mainImg/home_btn.png";

const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  return (
    <Container>
      <CenteredImage src={mainLogo} />
      <Title>도감</Title>
      <div>
      <Group15 />
      <Image5 />
      <GenerationSelection>세대 선택</GenerationSelection>
      </div>
      <Divider_0></Divider_0>

      <ImageLink to="/">
        <SmallImage_0 src={mainButtonImage} alt="메인 화면으로 이동" />
      </ImageLink>
      </Container>
  );
};

export default Page3;
