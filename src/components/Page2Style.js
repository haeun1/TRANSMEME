import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
`;

export const CenteredImage = styled.img`
  padding: 50px;
  width: 300px; /* 이미지 너비 조정 */
`;


export const Number = styled.h1`
  font-size: 50px;
  color: black;
  margin-top: 40px;
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
  margin-left: 10px;
  margin-right: 10px;
  font-size: 40px;
  color: black;
`;

export const Divider = styled.hr`
  width: 80%;
  margin-top: -20px;
  border: 10;
  border-top: 1px solid #ddd; /* 구분선 색상과 스타일 지정 */
`;
