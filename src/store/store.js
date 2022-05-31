import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../components/reducers/usersReducer";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})


export default store;