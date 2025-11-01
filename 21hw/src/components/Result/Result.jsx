import { useDispatch, useSelector } from "react-redux"
import { resetQuestionnaire } from "../../redux/questionnaireSlice"


export const Result = () => {
  const result = useSelector((state) => state.questionnaire.result)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Результат</h2>
      <p>{result}</p>
      <button onClick={() => dispatch(resetQuestionnaire())}>
        Пройти заново
      </button>
    </div>
  )
}