import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  ColorTitle_1,
  Container_1,
  Title_1,
  Question_1,
  ButtonContainer_1,
  AgreeButtonContainer_1,
  DisAgreeButtonContainer_1,
  AgreeButton_1,
  DisagreeButton_1,
  AgreeContent_1,
  DisagreeContent_1,
  NextButton_1,
} from "./TitleStyle";

const Page1 = ({ history }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const sendDataToServer = (choice) => {
    let dataToSend = {
      choice: choice === "동의" ? 1 : 2,
    };

    fetch("http://52.79.219.32:8000/dictionary/apitest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        // 서버 응답을 처리하는 코드 작성
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // 오류 처리 코드 작성
      });
  };

  const handleAgreeClick = () => {
    sendDataToServer("동의");
  };

  const handleDisagreeClick = () => {
    sendDataToServer("비동의");
  };

  const handleNextClick = () => {
    if (selectedValue !== null) {
      sendDataToServer(selectedValue);
      history.push("/page1_2"); // 다음 페이지로 이동
    } else {
      console.log("Please make a choice before proceeding.");
    }
  };

  return (
    <Container>
      <Container_1>
        <Title_1>
          0<ColorTitle_1>1</ColorTitle_1>
        </Title_1>
        <Question_1>
          오전 9시 정시 출근 괜찮다 VS 최소 10분 ~ 30분 전에는 출근해야한다.
        </Question_1>
        <ButtonContainer_1>
          <AgreeButtonContainer_1>
            <AgreeButton_1
              onClick={handleAgreeClick}
              disabled={selectedValue !== null}
            ></AgreeButton_1>
            <AgreeContent_1>동의</AgreeContent_1>
          </AgreeButtonContainer_1>
          <DisAgreeButtonContainer_1>
            <DisagreeButton_1
              onClick={handleDisagreeClick}
              disabled={selectedValue !== null}
            ></DisagreeButton_1>
            <DisagreeContent_1>비동의</DisagreeContent_1>
          </DisAgreeButtonContainer_1>
        </ButtonContainer_1>
      </Container_1>
      <NavLink to="/page1_2">
        <NextButton_1
          onClick={handleNextClick}
          disabled={selectedValue === null}
        >
          다음
        </NextButton_1>
      </NavLink>
    </Container>
  );
};

export default Page1;
