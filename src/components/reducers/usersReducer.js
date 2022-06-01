import { createReducer } from "@reduxjs/toolkit";

const testReducer = createReducer({}, (builder) => {
    builder
      .addCase('LOGIN', (state, payload) => {
        const loginInfo = payload.action
    
         if(loginInfo) {

            return loginInfo
         }
      })
  })

  export default testReducer;
  