import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestion, makeSelectQuestionAnswers } from "../../redux/questionnaireSlice";

export const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswers = useSelector(makeSelectQuestionAnswers(question.id));

  const handleChange = (option) => {
    dispatch(answerQuestion({ questionId: question.id, answer: option }));
  };

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedAnswers.includes(option)}
            onChange={() => handleChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};