import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="main-container">
      <div className="image15" />

      <div className="group18">
        <div className="image16" />
        <div className="transfer1" />
        <h1 className="mem-translate">세대 통합을 위한 밈번역기</h1>
      </div>

      <div className="line6" />
      <Link to="/page1">
        <div className="group19">
          <div className="exam1" />
        </div>
      </Link>
      <div className="rectangle25" />
      <div className="rectangle19" />
      <h1 className="mz-test">MZ테스트</h1>
      <h2 className="mz-power"># 나의 MZ력은?</h2>

      <div className="line10" />
      <Link to="/page2">
        <div className="group20">
          <div className="speech-bubble1" />
        </div>
      </Link>
      <div className="rectangle26" />
      <div className="rectangle28" />
      <h1 className="word-guess">신조어 맞추기</h1>
      <h2 className="mz-catch">#MZ어 따라잡기</h2>

      <div className="line9" />
    
      <Link to="/page3">
        <div className="group21">
          <div className="dictionary1" /> 
        </div>
      </Link>
      <div className="rectangle27" />
      <div className="rectangle29" />
      <h1 className="dictionary">도감</h1>
      <h2 className="a-to-z">#세대 간 소통을 위한 A to Z</h2>
    </div>
  );
};

export default Home;
