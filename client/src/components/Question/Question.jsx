import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Options from "./Options";

function Question() {
  const [quest, setQuest] = useState([]); // массив с вопросами
  const { id } = useParams(); // айди категории
  const [len, setLen] = useState(0); // длина массива с вопросами
  const [curIn, setCurIn] = useState(0); // текущий индекс в массиве с вопросами
  const [loaded, setLoaded] = useState(false); // ришли ли данны с сервера с вопросами
  const [isOver, setIsOver] = useState(false); // последний вопрос или нет
  const [curAnswer, setCurAnswer] = useState(""); // текущий ответ
  const [counter, setCounter] = useState(0); //счет
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);

  const questAll = async () => {
    const questionAll = await axios.get(`/api/${id}`);
    console.log(questionAll.data);
    setQuest(questionAll.data);
    setLen(questionAll.data.length);
    setLoaded(true);
  };
  const buttonNext = async () => {
    setCurAnswer("");
    if (curIn < len - 1) {
      setCurIn((prev) => prev + 1);
      setIsOpenAnswer(false);
    } else {
      setIsOver(true);
    }
  };

  const buttonAnswer = async () => {
    if (quest[curIn].answer === curAnswer.trim()) {
      setCounter((prev) => prev + 1);
      setIsOpenAnswer(true);
      console.log(isOpenAnswer);
    } else if (curAnswer) {
      setIsOpenAnswer(true);
      console.log(isOpenAnswer);
    } else {
      return;
    }
  };

  useEffect(() => {
    questAll();
  }, []);

  return (
    <>
      {isOver ? (
        <>
          <div>
            <h2>Ваш результат:</h2>
          </div>
          <div>
            <h2 className="mb-5">
             {counter} из {len}!
            </h2>
            <img style={{width: "600px", borderRadius: "60px"}} src="https://masterpiecer-images.s3.yandex.net/d0743fad8a1e11ee8fe7720ccb3e265f:upscaled" />
          
          </div>
        </>
      ) : (
        <div>
          <div>
            {loaded ? (
              <>
                <div className="mb-4">
                  <h2>{quest[curIn].question}</h2>
                </div>
                <div className="mb-4">{<Options options={quest[curIn].options}/>}</div>
                <div className="mb-4">
                  <img src={quest[curIn].photo} />
                </div>
                <input
                  required
                  className="mb-5 m-3"
                  placeholder=" ваш ответ"
                  style={{
                    borderRadius: "6px",
                    height: "40px",
                    paddingLeft: "10px",
                  }}
                  value={curAnswer}
                  onChange={(e) => setCurAnswer(e.target.value)}
                />
                <button onClick={buttonAnswer}>Ответить</button>
                {isOpenAnswer ? (
                  <div className="mb-4">
                    <strong>Правильный ответ: </strong>
                    {quest[curIn].answer}
                  </div>
                ) : (
                  <span></span>
                )}
              </>
            ) : (
              <p>please wait</p>
            )}
          </div>
          <button onClick={buttonNext}>Следующий</button>
        </div>
      )}
    </>
  );
}

export default Question;
