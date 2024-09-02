import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [], 
};

export const QuestionSlice = createSlice({
  name: "questions",
  initialState, 
  reducers: {
    fetchQuestions: (state, action) => {
      state.questions = action.payload; 
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
  },
});

// Export actions and reducer
export const { fetchQuestions,addQuestion } = QuestionSlice.actions;
export default QuestionSlice.reducer;
