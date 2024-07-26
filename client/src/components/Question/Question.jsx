import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Question() {
  const [quest, setQuest] = useState([]);
  const { id } = useParams();
  const [len, setLen] = useState(0);
  const [curIn, setCurIn] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const questAll = async () => {
    const questionAll = await axios.get(`/api/${id}`);
    console.log(questionAll.data);
    setQuest(questionAll.data);
    setLen(questionAll.data.length);
    setLoaded(true);
  };
  const buttonNext = async () => {
    if (curIn < len-1) {
      setCurIn((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  useEffect(() => {
    questAll();
  }, []);

  return (
    <>
      {isOver ? (
        <div>result</div>
      ) : (
        <div>
          <div>Question</div>
          <div>{loaded ? quest[curIn].question : <p>please wait</p>}</div>
          <button onClick={buttonNext}>Следующий</button>
        </div>
      )}
    </>
  );
}

export default Question;
