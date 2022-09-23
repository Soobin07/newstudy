import "./style.scss";
import NEWSTUDY from "assets/NEWSTUDY.jpg";
import React from "react";

export default function Page1() {
  return (
    <div className="page-div">
      <div className="background-div"></div>
      <img src={NEWSTUDY} alt="" className="title-img" />
      <h3 className="subtitle-h3">
        읽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;어&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;세&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;으&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;로
      </h3>
      <br />
      <h4 className="subdescription-h4">
        뉴스터디는 사용자별 &nbsp;<b>난이도에 맞는</b>&nbsp; 해외 뉴스 기사를
        통해
      </h4>
      <h4 className="subdescription-h4">영어를 공부할 수 있는 서비스입니다.</h4>
    </div>
  );
}
