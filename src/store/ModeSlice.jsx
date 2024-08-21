import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: 'mode',
  initialState: { toggle: false },
  reducers: {
    handleToggle: (state) => {
      state.toggle = !state.toggle;
    }
  },

});
export const modeAction = modeSlice.actions;

export default modeSlice;