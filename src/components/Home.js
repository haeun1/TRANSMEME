import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="main-container">
      <div className="mainlogo" />

      <Link to="/page0">  
      <div className="transmeme_btn">
        <div className="transfer_ic" />
        <h1 className="mem-search">세대 통합을 위한 밈번역기</h1>
        <div className="transferlogo" />
      </div>
      </Link>

      <div className="line6" />

      <Link to="/page1_start">
        <div className="mztest_btn">
          <div className="exam_ic" />
          <p><span className="mz-power"># 나의 MZ력은?</span></p>
          <h1 className="mz-test">MZ테스트</h1>
          <div className="rectangle19" />
        </div>
      </Link>

      <div className="line10" />

      <Link to="/page2">
        <div className="quiz_btn">
          <div className="quiz_ic" />
          <p><span className="mz-catch">#MZ어 따라잡기</span></p>
          <h1 className="word-guess">신조어 맞추기</h1>
          <div className="rectangle28" />
          
        </div>
      </Link>

      <div className="line9" />

      <Link to="/page3">
        <div className="dict_btn">
          <div className="dictionary_ic" />
          <p><span className="a-to-z">#세대 간 소통을 위한 A to Z</span></p>
          <h1 className="dictionary">도감</h1>
          <div className="rectangle29" />
        </div>
      </Link>
    </div>
  );
};

export default Home;
