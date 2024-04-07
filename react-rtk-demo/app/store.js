// const configureStore = require("@reduxjs/toolkit").configureStore;
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import usersReducer from "../features/users/usersSlice";
// const reduxLogger = require("redux-logger");

// const cakeReducer = require("../features/cake/cakeSlice");
// const icecreamReducer = require("../features/icecream/icecreamSlice");
// const usersReducer = require("../features/users/usersSlice");

// const logger = reduxLogger.createLogger();

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
