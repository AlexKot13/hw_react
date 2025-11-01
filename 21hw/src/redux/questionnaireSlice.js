import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Вам нравится программировать?",
      options: ["Да", "Нет"],
    },
    {
      id: 2,
      text: "Вы любите работать в команде?",
      options: ["Да", "Нет"],
    },
    {
      id: 3,
      text: "Вы предпочитаете изучать новые технологии самостоятельно?",
      options: ["Да", "Нет"],
    },
    {
      id: 4,
      text: "Вам нравится решать сложные задачи?",
      options: ["Да", "Нет"],
    },
    {
      id: 5,
      text: "Вы готовы пробовать новые методы работы и подходы?",
      options: ["Да", "Нет"],
    },
  ],
  answers: {},
  result: null,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      const currentAnswers = state.answers[questionId] || [];

      if (currentAnswers.includes(answer)) {
        state.answers[questionId] = currentAnswers.filter((a) => a !== answer);
      } else {
        state.answers[questionId] = [...currentAnswers, answer];
      }
    },
    submitAnswers: (state) => {
      let yesCount = 0;
      Object.values(state.answers).forEach((answers) => {
        yesCount += answers.filter((a) => a === "Да").length;
      });

      state.result =
        yesCount > state.questions.length / 2
          ? "Вы позитивно относитесь к программированию и командной работе!"
          : "Вы предпочитаете индивидуальный подход.";
      state.submitted = true;
    },
    resetQuestionnaire: (state) => {
      state.answers = {};
      state.result = null;
      state.submitted = false;
    },
  },
})

const selectAnswers = (state) => state.questionnaire.answers;

export const makeSelectQuestionAnswers = (questionId) =>
createSelector([selectAnswers], (answers) => answers[questionId] || [])

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions
export default questionnaireSlice.reducer