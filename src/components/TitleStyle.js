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

export const Title = styled.h1`
  font-size: 50px; /* 제목 폰트 크기 조정 */
  margin-top: -30px; /* 위쪽 여백 */
`;

export const Divider = styled.hr`
  width: 80%;
  margin-top: -20px;
  border: 10;
  border-top: 1px solid #ddd; /* 구분선 색상과 스타일 지정 */
`;
