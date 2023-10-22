import React, {useState} from 'react';
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({title, answer}) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
  return (
    <div className="container question">
        <div className="question-title" onClick={handleClick}>
            <h4>{title}</h4>
            <button className="question-icon" onClick={handleClick}>
                {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </div>
        <div className="question-answer">
            {showAnswer && <p className="u-text-small">
               {answer} 
            </p>}
        </div>
    </div>
  )
}

export default Question
