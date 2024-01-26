import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../../../../projes/FarmwiseFrontend/data-api-main/src/slices/userSlice";
import fieldsReducer from "../../../../../projes/FarmwiseFrontend/data-api-main/src/slices/fieldSlice";
import formReducer from "../../../../../projes/FarmwiseFrontend/data-api-main/src/slices/formSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    fields: fieldsReducer,
    form: formReducer,
  },
});