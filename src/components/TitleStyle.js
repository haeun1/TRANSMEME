import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import logoFont from "../fonts/logo.ttf";
import mainFont from "../fonts/main.ttf";
import o_btn from "../mainImg/o_btn.png";
import x_btn from "../mainImg/x_btn.png";

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

// 추가적인 스타일을 정의할 수 있습니다.
