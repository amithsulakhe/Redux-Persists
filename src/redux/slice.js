import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userName: "",
  },
  reducers: {
    addData: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { addData } = userSlice.actions;

export default userSlice.reducer;
