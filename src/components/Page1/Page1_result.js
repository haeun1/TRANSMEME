// Page1.js
import React, { useEffect } from "react";
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
  useEffect(() => {
    axios
      .get("http://52.79.219.32:8000/oldmantest/test", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const grade = response.data.grade.grade;
        const fOne = response.data.grade.Fone;
        const fTwo = response.data.grade.Ftwo;
        const fThree = response.data.grade.Fthird;

        console.log("Grade:", grade);
        console.log("FOne:", fOne);
        console.log("FTwo:", fTwo);
        console.log("FThree:", fThree);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // Handle error
      });
  }, []);

  // 페이지 번호를 변수 로 설정
  return (
    <Container>
      <Container_1>
        <CenteredImage_1_result src={mainLogo} />
        <Typecontent_1_result>
          당신은&nbsp;<Type_1_result>"요즘꼰대"</Type_1_result>&nbsp;입니다.
        </Typecontent_1_result>
        <TypeImage_1_result src={typeimg}></TypeImage_1_result>
        <ShareButton_1_result src={sharebutton}></ShareButton_1_result>
      </Container_1>
      <MainContainer_1>
        <FeatureContainer_1>
          <Feature_1>요즘 꼰대 특징</Feature_1>
          <FeatureContent_1>
            1. 자기 자랑을 멈추지 않는다 꼰대들은 말이 많다. 시도 때도 없이
            자신의 지식과 경험을 자랑하기 때문이다. “내가 왕년에는 말이야”라고
            시작하는 말은 대개 20~30년이 훌쩍 지난 이야기들이다.지금의 사회적
            정서, 현실적 문제와는 너무 동 떨어져 있어서 아무도 수긍하지 못한다.{" "}
            <br />
            <br />
            2. 무조건 가르치려고 한다 꼰대들은 모든 분야의 전문가처럼 군다.
            요리사, 사진가, 운동 선수, 디자이너 등 전문직 종사자들도 꼰대들과
            함께 있으면 학생이 된다. 꼰대들은 취미 생활로 아주 잠시 관심을
            가졌던 분야도, 다 해보고 다 이해하고 있다는 듯이 이야기한다. <br />
            <br /> 3. 남의 말을 듣지 않는다 주변 사람 중에 “그게 아니라”라는
            말로 대화를 시작하는 사람이 있다면 꼰대거나 꼰대가 될 확률이 매우
            높다. <br />
            <br /> 4. 어린 사람을 무시한다 꼰대는 자신보다 나이가 어린 사람을
            무시한다. 한 두 살 차이도 예외는 아니다. 반말은 기본이다. 정치든,
            대중문화든, 경제든 어린 사람이 자기 세대에 부합하는 담론을 제시하면
            꼰대는 “요즘 애들이 뭘 알고 이야기 하나?”라는 부정적 반응부터
            보인다.
            <br />
            <br />
            5. 쉽게 화를 낸다 꼰대들은 봄날의 미세먼지 경보처럼 자주 화를 낸다.
            그러나 그 이유는 쉽게 알 수 없다. 후배들이 살갑게 다가가면, 꼰대들은
            겉으로 웃으면서도 속으로는 버릇 없다고 생각한다. 예를 들어 회식
            자리에서 즐겁게 놀다가도 갑자기 “너 나 무시하냐?”라며 갑자기 화를
            낸다. 회의 시간에 꼰대들의 주장에 반대 의견을 내놓는 건 전자레인지에
            은박지를 넣는 격이다.
            <br />
            <br />
            6. 허락하는 걸 좋아한다 꼰대 상사에게는 “잠시 다녀오겠습니다” 대신
            “잠시 다녀와도 될까요?”라고 말해야 한다. 만약 “잠시
            다녀오겠습니다”라고 말했다간 “네 맘대로?”라는 대답과 함께 어디를?
            누구와? 왜? 가는지 꼬치꼬치 캐묻기 시작할 거다.
            <br />
            <br />
            7. 자신이 꼰대인 줄 모른다 다시 한번 말하지만, 꼰대의 가장 큰 문제는
            자기 자신이 꼰대인 줄 모른다는 것이다.
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
