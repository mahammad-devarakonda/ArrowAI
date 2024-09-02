import { createSlice } from "@reduxjs/toolkit"

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
      reviews: [],
    },
    reducers: {
      addReview: (state, action) => {
        state.reviews.push(action.payload);
      },
    },
  });
  
  export const { addReview } = reviewSlice.actions;
  export default reviewSlice.reducer;