// Page1.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  fontFace,
  Container,
  Container_1,
  Container_1_result,
  CenteredImage_1_result,
  Background1_1_result,
  Title_1_start,
  WhiteBox_1_result,
  Title_1_result,
  Background_1_result,
  RotateLine_1_result,
  TimeLabel_1_result,
  CommentBubble_1_result,
  NameLabel_1_result,
  TimeLine_1_result_1,
  TimeLine_1_result_2,
  ImageLink,
  SmallImage_0,
  MainContent_0,
  Typecontent_1_result,
  Type_1_result,
  TypeImage_1_result,
  ShareButton_1_result,
  MainContainer_1,
  FeatureContainer_1,
  Feature_1,
  FeatureContent_1,
  ColorTitle_1,
  InputContainer_1_start,
  InputField_1_start,
  InputLabel_1_start,
  InputLabelContainer_1_start,
  StartLink_1,
  Divider_0,
  CommentContainer_1,
  CommentTitle_1,
  CommentBox_1,
  Verticalbar_1,
  DataContainer_1,
  DataTitle_1,
  ImageLink_1,
  NextButton_1,
  DateLabel_1_result,
  StatisticContainer1_1_result,
  StatisticContainer_1_result,
  StatisticTitle_1_result,
  Line_1_result,
  AbsoluteImage_1_result,
  ColoredCircleBackground_1_result,
  ColoredCircleForeground_1_result,
  ColoredCirclesWrapper_1_result,
  PercentageLabel_1_result,
  NumberSpan_1_result,
  GenerationLabel_1_result,
} from "../TitleStyle";
import mainButtonImage from "../../mainImg/home_btn.png";
import mainLogo from "../../mainImg/mainlogo.png";
import typeimg from "../../mainImg/ggondae_ic.png";
import sharebutton from "../../mainImg/share_btn.png";
import o_btn from "../../mainImg/o_btn.png";
import o_btn_remove from "../../mainImg/o_btn_remove.png";
import x_btn from "../../mainImg/x_btn.png";

const Page1_result = () => {
  const [grade, setGrade] = useState(null);
  const [fOne, setFOne] = useState(null);
  const [fTwo, setFTwo] = useState(null);
  const [fThree, setFThree] = useState(null);
  const location = useLocation();
  const resultData = location.state;
  // useEffect(() => {
  //   axios
  //     .post("http://52.79.219.32:8000/oldmantest/test", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       const receivedGrade = response.data.grade.grade;
  //       const receivedFOne = response.data.grade.Fone;
  //       const receivedFTwo = response.data.grade.Ftwo;
  //       const receivedFThree = response.data.grade.Fthird;
  //       setGrade(receivedGrade);
  //       setFOne(receivedFOne);
  //       setFTwo(receivedFTwo);
  //       setFThree(receivedFThree);
  //       console.log("Grade:", grade);
  //       console.log("FOne:", fOne);
  //       console.log("FTwo:", fTwo);
  //       console.log("FThree:", fThree);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending data to server:", error);
  //       // Handle error
  //     });
  // }, []);

  useEffect(() => {
    if (resultData) {
      axios
        .post("http://52.79.219.32:8000/oldmantest/test", resultData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const receivedGrade = response.data.grade.grade;
          const receivedFOne = response.data.grade.Fone;
          const receivedFTwo = response.data.grade.Ftwo;
          const receivedFThree = response.data.grade.Fthird;
          setGrade(receivedGrade);
          setFOne(receivedFOne);
          setFTwo(receivedFTwo);
          setFThree(receivedFThree);
          console.log("Grade:", receivedGrade);
          console.log("FOne:", receivedFOne);
          console.log("FTwo:", receivedFTwo);
          console.log("FThree:", receivedFThree);
        })
        .catch((error) => {
          console.error("Error sending data to server:", error);
          // Handle error
        });
    }
  }, [resultData]);

  // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <Container_1>
        <CenteredImage_1_result src={mainLogo} />
        <Typecontent_1_result>
          당신은&nbsp;<Type_1_result>"{grade}"</Type_1_result>&nbsp;입니다.
        </Typecontent_1_result>
        <TypeImage_1_result src={typeimg}></TypeImage_1_result>
        <ShareButton_1_result src={sharebutton}></ShareButton_1_result>
      </Container_1>
      <MainContainer_1>
        <FeatureContainer_1>
          <Feature_1>{grade} 특징</Feature_1>
          <FeatureContent_1>
            1. &nbsp;{fOne}
            <br />
            <br />
            2. &nbsp;{fTwo} <br />
            <br /> 3. &nbsp;{fThree} <br />
            <br />
          </FeatureContent_1>
        </FeatureContainer_1>
        <CommentContainer_1>
          <CommentBox_1>
            <CommentTitle_1>Comment</CommentTitle_1>
            <Verticalbar_1></Verticalbar_1>
          </CommentBox_1>
        </CommentContainer_1>
        <Container_1_result>
          <WhiteBox_1_result />
          <Title_1_result>실시간 COMMENT</Title_1_result>
          <Background_1_result />
          <TimeLine_1_result_1></TimeLine_1_result_1>
          <TimeLine_1_result_2></TimeLine_1_result_2>
          <RotateLine_1_result />
          <DateLabel_1_result>2013년 8월 10일</DateLabel_1_result>
          <TimeLabel_1_result>14:32</TimeLabel_1_result>
          <CommentBubble_1_result>나 요즘 꼰대 나옴 ㅋ</CommentBubble_1_result>
          <NameLabel_1_result>홍설(M)</NameLabel_1_result>
          {/* 나머지 컴포넌트도 동일한 방식으로 작성 */}
        </Container_1_result>
        <StatisticContainer1_1_result>
          <Background1_1_result />
          <StatisticTitle_1_result>통계</StatisticTitle_1_result>
          <Line_1_result></Line_1_result>

          <ColoredCircleBackground_1_result
            left={300}
            top={120}
            src={o_btn_remove}
          />
          <ColoredCircleForeground_1_result left={430} top={120} src={x_btn} />

          <GenerationLabel_1_result left={170} top={190}>
            X세대
          </GenerationLabel_1_result>
          <GenerationLabel_1_result left={170} top={230}>
            M세대
          </GenerationLabel_1_result>
          <GenerationLabel_1_result left={170} top={270}>
            Z세대
          </GenerationLabel_1_result>
          <PercentageLabel_1_result left={300} top={190}>
            68%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={300} top={230}>
            50%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={300} top={270}>
            32%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={430} top={190}>
            32%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={430} top={230}>
            50%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={430} top={270}>
            68%
          </PercentageLabel_1_result>
          <NumberSpan_1_result left={180} top={120} color="black">
            0<ColorTitle_1>1</ColorTitle_1>
          </NumberSpan_1_result>

          <ColoredCircleBackground_1_result
            left={710}
            top={120}
            src={o_btn_remove}
          />
          <ColoredCircleForeground_1_result left={840} top={120} src={x_btn} />

          <GenerationLabel_1_result left={580} top={190}>
            X세대
          </GenerationLabel_1_result>
          <GenerationLabel_1_result left={580} top={230}>
            M세대
          </GenerationLabel_1_result>
          <GenerationLabel_1_result left={580} top={270}>
            Z세대
          </GenerationLabel_1_result>
          <PercentageLabel_1_result left={710} top={190}>
            68%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={710} top={230}>
            50%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={710} top={270}>
            32%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={840} top={190}>
            32%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={840} top={230}>
            50%
          </PercentageLabel_1_result>
          <PercentageLabel_1_result left={840} top={270}>
            68%
          </PercentageLabel_1_result>
          <NumberSpan_1_result left={580} top={120} color="black">
            0<ColorTitle_1>2</ColorTitle_1>
          </NumberSpan_1_result>
        </StatisticContainer1_1_result>

        <ImageLink_1 to="/">
          <NextButton_1>홈으로</NextButton_1>
        </ImageLink_1>
      </MainContainer_1>
    </Container>
  );
};
export default Page1_result;
