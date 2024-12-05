import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./ModeSlice";

const prortfolioStore = configureStore({

  reducer: {
    mode: modeSlice.reducer,
  }

});

export default prortfolioStore;
