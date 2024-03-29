import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "./style.scss";
import BackBtn from "components/BackBtn";
import Check from "assets/check.png";
import Question from "./Question";
import Result from "./Result";
import { useCallback } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function SpeedQuiz() {
  const [index, setIndedx] = useState(0);
  const [takenTime, setTakenTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);
  const userState = useSelector((state) => state.user);

  useInterval(() => {
    if (index >= 10) return;
    setTakenTime((prev) => prev + 1);
  }, 1000);

  const addValueToAnswer = useCallback(() => {
    initDomElement();
    if (index >= 0) {
      let curAnswer = "";
      document.querySelectorAll(".question-input").forEach((e) => {
        e.value === "" ? (curAnswer += " ") : (curAnswer += e.value);
        e.value = "";
      });

      setAnswer([
        ...answer,
        {
          ...questions[index],
          user: curAnswer,
          correct:
            curAnswer.toUpperCase() === questions[index].eng.toUpperCase()
              ? true
              : false,
          index: index + 1,
        },
      ]);
    }
  }, [questions, answer, index]);

  const onNextClick = useCallback(() => {
    addValueToAnswer();
    setIndedx((prev) => prev + 1);
  }, [addValueToAnswer]);

  const initDomElement = () => {
    document.querySelector(".question-timer-container").replaceChildren();
    document.querySelector(".question-kor-trans").style.display = "none";
  };

  useEffect(() => {
    if (timer) clearTimeout(timer);

    if (index >= 10) return;

    setTimer(
      setTimeout(() => {
        if (index >= 10) return;
        onNextClick();
      }, 10000),
    );

    return () => clearTimeout(timer);
  }, [index, questions, onNextClick]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        headers: {
          Authorization: `Bearer ${userState.accessToken}`,
        },
      };
      const questionResponse = await axios.get("/word/game", headers);
      setQuestions(questionResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div className="speedquiz-container">
      <BackBtn />
      {index < 10 && questions.length > 0 ? (
        <section className="speedquiz-content-container">
          <h1 className="speedquiz-title">
            <b>SPEED</b> QUIZ
          </h1>
          <h3 className="speedquiz-subtitle">
            단어의 뜻을 보고, 정확한 단어의 스펠링을 작성해주세요! &nbsp;{" "}
            <img
              src={Check}
              alt="체크모양 이미지"
              className="speedquiz-subtitle-checkimg"
            />
          </h3>

          <Question
            question={questions[index]}
            index={index + 1}
            onNextClick={onNextClick}
            initDomElement={initDomElement}
          />
        </section>
      ) : (
        <Result answer={answer} takenTime={takenTime} userState={userState} />
      )}
    </div>
  );
}
