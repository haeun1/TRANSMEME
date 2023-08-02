// Page3.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Page3 = () => {
  const pageNumber = 3; // 페이지 번호를 변수로 설정
  return (
    <div>
      <h1>페이지 {pageNumber}</h1>
      <NavLink to="/">메인 화면으로 이동</NavLink>
    </div>
  );
};

export default Page3;
