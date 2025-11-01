import { useDispatch, useSelector } from "react-redux"
import { Question } from "./components/Question/Question"
import { Result } from "./components/Result/Result"
import { submitAnswers } from "./redux/questionnaireSlice"
import './App.css'


function App() {
  const dispatch = useDispatch()
  const { questions, submitted } = useSelector((state) => state.questionnaire)

  return (
    <div className="container">
      <h1 className="title">Анкета</h1>
      {!submitted ? (
        <>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
          <button onClick={() => dispatch(submitAnswers())}>
            Отправить ответы
          </button>
        </>
      ) : (
        <Result />
      )}
    </div>
  )
}

export default App
