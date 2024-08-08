import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/CounterSlice";
import userReducer from "./redux/userSlice";
import commentReducer from "./redux/commentSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    newSubscriber: userReducer,
    newComments: commentReducer,
  },
});
