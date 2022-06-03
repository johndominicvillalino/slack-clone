import { createReducer } from "@reduxjs/toolkit";

const testReducer = createReducer({}, (builder) => {
    builder
      .addCase('LOGIN', (state, payload) => {
        const loginInfo = payload.action
         if(loginInfo) {
            return loginInfo
         }
      })
      .addCase('LOAD_USER', (state, payload) => {
         const loginInfo = payload.action
          if(loginInfo) {
             return loginInfo
          }
       })
       .addCase('FORCE', (state, payload) => {

         return {
            ...state,
            update:state.update + 1
         }
       })
  })

  export default testReducer;
  