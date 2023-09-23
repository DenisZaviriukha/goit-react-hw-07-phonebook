import { configureStore } from "@reduxjs/toolkit";
import { contactArraySlice } from "./contactArraySlice";
import { contactFilterSlice } from "./filterSlice";


export const store = configureStore({
  reducer: {
      contactArray: contactArraySlice.reducer,
      filter: contactFilterSlice.reducer,
    }
})

