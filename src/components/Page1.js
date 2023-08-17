import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios"; // axios를 import
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

const Page1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const storedNickname = localStorage.getItem("nickname");
  const storedAge = localStorage.getItem("age");
  const [selectedValue, setSelectedValue] = useState(null);
  const [problemNumber, setProblemNumber] = useState(null);
  const [question, setQuestion] = useState(null);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [userGeneration, setUserGeneration] = useState(null);

  useEffect(() => {
    // 이전 페이지에서 받아온 데이터로 문제번호와 문제 설정

    const { problemNumber, question } = location.state;
    setProblemNumber(problemNumber);
    setQuestion(question);
  }, [location.state]);

  const sendDataToServer = (choice) => {
    const dataToSend = {
      nickname: storedNickname,
      generation: "Z",
      index: problemNumber,
      choice: choice === "동의" ? 1 : 2,
    };
    axios
      .post("http://52.79.219.32:8000/oldmantest/test", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const receivedProblemNumber = response.data.index;

        const receivedUserGeneration = response.data.user.generation;
        console.log("Selected Choice:", choice); // 선택한 값 출력
        console.log("Response sent successfully:", response);
        console.log("Received Problem Number:", receivedProblemNumber);

        console.log("Received User Generation:", receivedUserGeneration);
        // 서버 응답 처리 로직 추가
        setProblemNumber(receivedProblemNumber);
        setUserGeneration(receivedUserGeneration);
        setSelectedValue(null); // Clear the selected value
        // Enable the "Next" button

        if (receivedProblemNumber === 11) {
          // 넘어가고자 하는 페이지의 로직을 추가
          console.log("데이터와 함께 결과 페이지로 이동:", {
            nickname: storedNickname,
            userGeneration: userGeneration,
            problemNumber: problemNumber,
            choice: selectedValue,
          });
          navigate("/page1_result", {
            state: {
              nickname: storedNickname,
              userGeneration: receivedUserGeneration,
              problemNumber: receivedProblemNumber,
              choice: choice === "동의" ? 1 : 2,
            },
          }); // 적절한 페이지로 넘기는 예시
          return;
        } else {
          // Load question contents if the problem number is not 11
          const receivedQuestion = response.data.question.contents;
          console.log("Received Question:", receivedQuestion);
          setQuestion(receivedQuestion);
        }
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

  // const handleNextClick = () => {
  //   if (selectedValue !== null) {
  //     sendDataToServer(selectedValue); // Send the selected value to the server
  //     // Fetch the next question from the server
  //     axios
  //       .get("http://52.79.219.32:8000/oldmantest/next_question")
  //       .then((response) => {
  //         const receivedProblemNumber = response.data.index;
  //         const receivedQuestion = response.data.question.contents;
  //         console.log("Received Problem Number:", receivedProblemNumber);
  //         console.log("Received Question:", receivedQuestion);

  //         // Update the state to show the next question
  //         setProblemNumber(receivedProblemNumber);
  //         setQuestion(receivedQuestion);
  //         setSelectedValue(null); // Clear the selected value
  //         setNextEnabled(false); // Disable the "Next" button
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching next question:", error);
  //       });
  //   } else {
  //     console.log("Please make a choice before proceeding.");
  //   }
  // };

  return (
    <Container>
      <Container_1>
        <Title_1>
          0<ColorTitle_1>{problemNumber}</ColorTitle_1>
        </Title_1>
        <Question_1>{question}</Question_1>
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
      {/* <NextButton_1 disabled={!nextEnabled || selectedValue === null}>
        다음
      </NextButton_1> */}
    </Container>
  );
};

export default Page1;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios"; // axios를 import
// import {
//   Container,
//   ColorTitle_1,
//   Container_1,
//   Title_1,
//   Question_1,
//   ButtonContainer_1,
//   AgreeButtonContainer_1,
//   DisAgreeButtonContainer_1,
//   AgreeButton_1,
//   DisagreeButton_1,
//   AgreeContent_1,
//   DisagreeContent_1,
//   NextButton_1,
// } from "./TitleStyle";

// const Page1 = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const storedNickname = localStorage.getItem("nickname");
//   const storedAge = localStorage.getItem("age");
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [problemNumber, setProblemNumber] = useState(null);
//   const [question, setQuestion] = useState(null);
//   const [nextEnabled, setNextEnabled] = useState(false);
//   const [canProceed, setCanProceed] = useState(false);
//   const [userGeneration, setUserGeneration] = useState(null);

//   useEffect(() => {
//     // 이전 페이지에서 받아온 데이터로 문제번호와 문제 설정
//     const { problemNumber, question } = location.state;
//     setProblemNumber(problemNumber);
//     setQuestion(question);
//   }, [location.state]);

//   const handleAgreeClick = () => {
//     setSelectedValue("동의"); // "동의"로 선택 값을 변경
//   };

//   const handleDisagreeClick = () => {
//     setSelectedValue("비동의"); // "비동의"로 선택 값을 변경
//   };

//   const handleNextClick = () => {
//     const choice = selectedValue; // 선택 값 가져오기

//     if (choice === null) {
//       console.log("Please make a choice before proceeding.");
//       return;
//     }
//     const dataToSend = {
//       nickname: storedNickname,
//       generation: "Z",
//       index: problemNumber,
//       choice: choice === "동의" ? 1 : 2,
//     };
//     axios
//       .post("http://52.79.219.32:8000/oldmantest/next_question", dataToSend)
//       .then((response) => {
//         const receivedProblemNumber = response.data.index;
//         const receivedQuestion = response.data.question.contents;
//         const receivedUserGeneration = response.data.user.generation;
//         console.log("Received Problem Number:", receivedProblemNumber);
//         console.log("Received Question:", receivedQuestion);

//         // Update the state to show the next question
//         setProblemNumber(receivedProblemNumber);
//         setQuestion(receivedQuestion);
//         setSelectedValue(null); // Clear the selected value
//         // Enable the "Next" button if needed
//       })
//       .catch((error) => {
//         console.error("Error fetching next question:", error);
//       });
//   };

//   return (
//     <Container>
//       <Container_1>
//         <Title_1>
//           0<ColorTitle_1>{problemNumber}</ColorTitle_1>
//         </Title_1>
//         <Question_1>{question}</Question_1>
//         <ButtonContainer_1>
//           <AgreeButtonContainer_1>
//             <AgreeButton_1 onClick={handleAgreeClick}></AgreeButton_1>
//             <AgreeContent_1>동의</AgreeContent_1>
//           </AgreeButtonContainer_1>
//           <DisAgreeButtonContainer_1>
//             <DisagreeButton_1 onClick={handleDisagreeClick}></DisagreeButton_1>
//             <DisagreeContent_1>비동의</DisagreeContent_1>
//           </DisAgreeButtonContainer_1>
//         </ButtonContainer_1>
//       </Container_1>
//       <NextButton_1 onClick={handleNextClick} disabled={selectedValue === null}>
//         다음
//       </NextButton_1>
//     </Container>
//   );
// };

// export default Page1;
