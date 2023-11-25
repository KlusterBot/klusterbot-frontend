import { createSlice } from "@reduxjs/toolkit";

const isNewUserSlice = createSlice({
  name: "isNewUser",
  initialState: false,
  reducers: {
    setNewUserToTrue(state) {
      state = true;
      return state;
    },
    setNewUserToFalse(state) {
      state = false;
      return state;
    },
  },
});

export const { setNewUserToFalse, setNewUserToTrue } = isNewUserSlice.actions;
export default isNewUserSlice.reducer;
