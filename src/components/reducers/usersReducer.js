import { createReducer } from "@reduxjs/toolkit";

const testReducer = createReducer([], (builder) => {
    builder
      .addCase('LOGIN', (state, action) => {
        const test = action.payload
         if(test) {
             return test
         }
      })
  })

  export default testReducer;
  