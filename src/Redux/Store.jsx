
import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './QuestionsSlics'; // Import the default export from QuestionsSlics

export const store = configureStore({
  reducer: {
    questions: questionsReducer, 
  },
});

