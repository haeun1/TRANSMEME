import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import logoFont from "../fonts/logo.ttf";
import mainFont from "../fonts/main.ttf";
import o_btn from "../mainImg/o_btn.png";
import x_btn from "../mainImg/x_btn.png";
import o_ic from "../mainImg/o_ic.png";
import image5 from "../mainImg/image 5.png"

export const fontFace = css`
  @font-face {
    font-family: "logo_f"; /* 원하는 폰트 이름 설정 */
    src: url(${logoFont}) format("truetype"); /* 폰트 파일 경로 설정 */
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "main_f";
    src: url(${mainFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenteredImage = styled.img`
  padding: 50px;
  width: 200px;
`;

export const Title = styled.h1`
  font-size: 60px;
  margin-top: -30px;
  font-family: "logo_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const RankingContainer_0 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 50px;
  margin-top: -30px;
  font-size: 17px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;
export const Verticalbar_0 = styled.div`
  border: 3px solid #ababab;
  height: 25px;
`;
export const RankingContent_0 = styled.div`
  margin-left: 10px;
  color: #00b0f0;
`;
export const Ranking_0 = styled.div`
  margin-left: 10px;
`;

export const DictContainer_0 = styled.div`
  height: 600px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const DictContent_Main_0 = styled.div`
  word-wrap: break-word;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px;
`;
export const DictContent_0 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const Downarrow_0 = styled.div`
  text-align: center;
  margin-top: -90px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  color: #00b0f0;
  font-size: 80px;
`;

export const DictContent_MainWord_0 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: -70px;
  & > :first-child {
    font-size: 50px;
  }
`;

export const DictContent_word_0 = styled.div`
  font-size: 30px;
  margin-right: 10px;
  color: black;
`;

export const DictContent_type_0 = styled.div`
  color: #dbdbdb;
  font-weight: 900;
  font-size: 25px;
`;

export const DictContent_mean_0 = styled.div`
  word-wrap: break-word;
  width: 1000px;
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
`;

export const DictContent_ex_0 = styled.div`
  color: #00b0f0;
  width: 50%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const DictContent_sen_0 = styled.div`
  font-size: 22px;
  margin-top: 20px;
  color: black;
  display: flex;
  align-items: center;
`;

export const DictContent_Word_0 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Divider_0 = styled.hr`
  width: 80%;
  margin-top: 40px;
  border: none;
  border-top: 2px solid #ddd;
  align-self: center; /* 가운데 정렬 */
`;

export const Box_Divider_0 = styled.hr`
  width: 90%;
  margin-top: 0px;
  border: none;
  border-top: 1px solid #ddd;
  align-self: center; /* 가운데 정렬 */
`;

export const ImageLink = styled(NavLink)`
  position: absolute;
  top: 77px;
  right: 100px;
`;

export const SmallImage_0 = styled.img`
  width: 70px;
  height: auto;
  cursor: pointer;
`;

export const MainContent_0 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70%;
`;

export const BoxContainer_0 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* 수직 가운데 정렬을 위해 추가 */
  margin-top: -10px;
`;

export const Box_input_0 = styled.div`
  margin-top: 20px;
  border: 2px solid #00b0f0;
  height: 300px;
  width: 540px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
export const Box_0 = styled.div`
  margin-top: 20px;
  border: 2px solid #ddd;
  height: 300px;
  width: 540px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const BoxTitle_0 = styled.h2`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const BoxContent_input_0 = styled.p`
  font-size: 40px;
  margin-top: -20px;
  padding: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;
export const BoxContent_0 = styled.p`
  font-size: 40px;
  margin-top: -20px;
  padding: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const DividerImage_0 = styled.img`
  width: 85px;
  height: auto;
  margin: 0 50px; /* 이미지와 상자 사이의 간격 조절 */
`;

export const Button_0 = styled.button`
  background-color: #87daf8;
  font-size: 20px;
  border: none;
  border-radius: 0 0 10px;
  padding: 20px 30px;
  cursor: pointer;
  position: absolute;
  bottom: -32px;
  right: -69px;
  transform: translate(-50%, -50%);
  font-family: "main_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const ColorTitle_1 = styled.span`
  color: #00b0f0;
`;

export const CenteredImage_1_start = styled.img`
  margin-top: 100px;
  padding: 50px;
  width: 300px;
`;
export const Title_1_start = styled.h1`
  font-size: 90px;
  margin-top: -30px;
  font-family: "logo_f", sans-serif;
  font-weight: 300;
  ${fontFace};
`;

export const InputContainer_1_start = styled.div`
  display: flex;

  align-items: center;
  margin-top: 20px;
`;

export const InputLabelContainer_1_start = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px; /* 레이블 너비 */
  margin-bottom: 8px;
  align-items: center;
`;

export const InputLabel_1_start = styled.label`
  font-size: 25px;
  margin-bottom: 8px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const InputField_1_start = styled.input`
  width: 200px;
  height: 50px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  border: none;
  background-color: #afe6fa;
  font-size: 20px;
  border-radius: 10px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const StartLink_1 = styled(NavLink)`
  margin-top: 60px;
  text-decoration: none; /* 밑줄 없애기 */
  color: black;
  font-size: 40px;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
`;

export const Container_1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title_1 = styled.h1`
  font-size: 80px;
  margin-top: 120px;
`;

export const Question_1 = styled.p`
  font-size: 30px;
  margin: 50px 0;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  wordwrap: "break-word";
`;

export const Button_1 = styled.button`
  height: 130px;
  width: 130px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: 1000;
`;

export const ButtonContainer_1 = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 200px;
  margin-top: 10px;
`;
export const AgreeButtonContainer_1 = styled.div`
  display: flex;
  font-size: 25px;
  color: #00b0f0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const DisAgreeButtonContainer_1 = styled.div`
  display: flex;
  font-size: 25px;
  color: #f44336;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const AgreeButton_1 = styled(Button_1)`
  color: #00b0f0;
  background-color: white;
  background-image: url(${o_btn});
  background-size: cover;
`;

export const DisagreeButton_1 = styled(Button_1)`
  color: #f44336;
  background-color: white;
  background-image: url(${x_btn});
  background-size: cover;
`;

export const AgreeContent_1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const DisagreeContent_1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

// Page2
export const Number = styled.h1`
  font-size: 50px;
  color: black;
  margin-top: 30px;
  span {
    color: #00B0F0;
  }
`;

export const QuizBox = styled.div`
  background-color: rgba(0, 176, 240, 0.37);
  border-radius: 50px;
  display: inline-block;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const BlackText = styled.h1`
  margin-left: 60px;
  margin-right: 60px;
  font-size: 35px;
  color: black;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;

export const Divider = styled.hr`
  width: 80%;
  margin-top: -20px;
  border: 10;
  border-top: 1px solid #ddd; /* 구분선 색상과 스타일 지정 */
`;

export const BalanceContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  gap: 150px;
  margin-top: 50px;
`;

export const LeftButtonContainer = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
  text-align: center;
`;
export const VSContainer = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
`;
export const RightButtonContainer = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
  text-align: center;
`;

export const balanceSelect = styled.p`
  font-size: 30px;
  margin: 50px 0;
  font-family: "main_f", sans-serif;
  font-weight: 200;
  ${fontFace};
  wordwrap: "break-word";
  text-align: center;
`;

export const VS = styled.p`
  font-size: 30px;
  margin: 25px 0;
  color: #00b0f0;
  font-family: "main_f", sans-serif;
  font-weight: 600;
  ${fontFace};
  wordwrap: "break-word";
`;

//page2_result
export const SelectContainer = styled.div`
  position: absolute;
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  word-wrap: break-word;
  text-align: center;
  z-index: 2; /* 더 높은 z-index 값 설정 */

  /* 나머지 스타일 */
`;

export const ImageContainer = styled.div`
  position: relative;
  z-index: 1; /* 더 낮은 z-index 값 설정 */

  /* 나머지 스타일 */
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

export const NotSelectContainer = styled.div`
  display: flex;
  font-size: 30px;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  wordwrap: "break-word";
  text-align: center;
`;


export const ResultText = styled.p`
  font-size: 50px;
  margin-top: 200px;
  margin-left: 80px;
  font-family: "main_f", sans-serif;
  font-weight: 900;
  ${fontFace};
  word-wrap: break-word;
  display: inline-block; /* 인라인 블록 요소로 설정 */
`;

export const ShareImageContainer = styled.div`
  margin-top: 110px;
  display: inline-block; /* 인라인 블록 요소로 설정 */

  /* 나머지 스타일 */
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* 나머지 스타일 */
`;


export const GoHomeBox =  styled(NavLink)`
  margin-top: 80px;
  background-color: rgba(0, 176, 240, 0.37);
  border-radius: 50px;
  display: inline-block;
  text-decoration: none;
`;

//Page3.js

// Group 15
export const Group15 = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  left: 10px;
  top: 0px;
`;

// image 5
export const Image5 = styled.div`
  position: absolute;
  width: 28px;
  height: 19px;
  left: 140px;
  top: 225px;
  background: url(${image5});
`;

// 세대 선택
export const GenerationSelection = styled.div`
  position: absolute;
  width: 99px;
  height: 25px;
  left: 176px;
  top: 225px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;


// Group 40
export const Group40 = styled.div`
  position: absolute;
  width: 147px;
  height: 117px;
  left: 50px;
  top: 5px;
`;

// Line 29, 30, and 31
export const Line = styled.div`
  position: absolute;
  width: 130px;
  height: 0px;
  left: 94px;
  border: 1px solid #ABABAB;

  // Modify top position based on props
  top: ${props => props.topPosition || '0px'};
`;

// X (70-80), M (81-94), and Z (95-2012)
export const Label = styled.div`
  position: absolute;
  width: ${props => props.width || '99px'};
  height: 25px;
  left: ${props => props.left || '102px'};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;

  // Modify top position based on props
  top: ${props => props.topPosition || '0px'};
`;


// ㄱ Wrapper
export const Wrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: 45px;
  top: 25px;
`;

// Rectangle 19
export const Rectangle19 = styled.div`
  position: absolute;
  width: 153px;
  height: 61px;
  left: 403px;
  top: 329px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄱ
export const Character = styled.div`
  position: absolute;
  width: 83px;
  height: 51px;
  left: 461px;
  top: 338px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const TextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${props => props.left || '392px'};
  top: ${props => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;


// ㄴ Wrapper
export const NWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 280px;
  left: -70px;
  top: 25px;
`;

// Rectangle 20
export const Rectangle20 = styled.div`
  position: absolute;
  width: 153px;
  height: 61px;
  left: 951px;
  top: 329px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄴ
export const NCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 51px;
  left: 1012px;
  top: 338px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const NTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${props => props.left || '932px'};
  top: ${props => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;


// ㄷ Wrapper
export const DWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 286px;
  left: 45px;
  top: 50px;
`;

// Rectangle 21
export const Rectangle21 = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 403px;
  top: 667px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄷ
export const DCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 461px;
  top: 678px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const DTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${props => props.left || '392px'};
  top: ${props => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;

// ㄹ Wrapper
export const LWrapper = styled.div`
  position: absolute;
  width: 191px;
  height: 283px;
  left: -70px;
  top: 50px;
`;

// Rectangle 22
export const Rectangle22 = styled.div`
  position: absolute;
  width: 153px;
  height: 63px;
  left: 951px;
  top: 667px;
  background: rgba(0, 176, 240, 0.37);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

// ㄹ
export const LCharacter = styled.div`
  position: absolute;
  width: 83px;
  height: 49px;
  left: 1012px;
  top: 678px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// 가즈아 - Since this component is repeated multiple times, we'll use props to adjust positions
export const LTextLabel = styled.div`
  position: absolute;
  width: 80px;
  height: 27px;
  left: ${props => props.left || '932px'};
  top: ${props => props.top};
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
`;


//Page3_word.js


// 단어해석 Wrapper
export const WordTranslationWrapper = styled.div`
  position: absolute;
  width: 900px;
  height: 60px;
  left: calc(50% - 900px/2 - 62px);
  top: 0px;
`;

// 가즈아
export const WordLabel = styled.div`
  position: absolute;
  width: 167px;
  height: 59px;
  left: 89px;
  top: 300px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  color: #000000;
`;

// (Z)
export const ZLabel = styled.div`
  position: absolute;
  width: 125px;
  height: 30px;
  left: 197px;
  top: 315px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ABABAB;
`;

// Line 27
export const Line27 = styled.div`
  position: absolute;
  width: 900px;
  height: 0px;
  left: 89px;
  top: 355px;
  border: 1.5px solid #D9D9D9;
`;

export const Description = styled.div`
  position: absolute;
  width: 826px;
  height: 21px;
  left: 335px;
  top: 400px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;


// 예문 Wrapper
const ExampleWrapper = styled.div`
  position: absolute;
  width: 272px;
  height: 103px;
  left: 40px;
  top: 0px;
`;

// 예문 Title
const ExampleTitle = styled.div`
  position: absolute;
  width: 105px;
  height: 33px;
  left: 369px;
  top: 571px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #00B0F0;
`;

// 예문 Content
const ExampleContent = styled.div`
  position: absolute;
  width: 272px;
  height: 63px;
  left: 369px;
  top: 611px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

export { ExampleWrapper, ExampleTitle, ExampleContent };

// Group 41 Wrapper
const Group41Wrapper = styled.div`
  position: absolute;
  width: 276px;
  height: 100px;
  left: 10px;
  top: 0px;
`;

// 다른 세대 유사 단어 Title
const SimilarWordTitle = styled.div`
  position: absolute;
  width: 206px;
  height: 30px;
  left: 857px;
  top: 571px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ABABAB;
`;

// ㄹㅊㄱ (Z) 돌진! (X) Content
const WordContent = styled.div`
  position: absolute;
  width: 272px;
  height: 63px;
  left: 861px;
  top: 608px;
  font-family: "main_f", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`;

export { Group41Wrapper, SimilarWordTitle, WordContent };
