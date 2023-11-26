import { jwtDecode } from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "@/lib/services/localStorageServices";

const token = getToken();
const user = token && jwtDecode(token);
// @ts-ignore
const verified = user?.["verified"] || false;

const isVerifiedSlice = createSlice({
  name: "isVerified",
  initialState: verified,
  reducers: {},
});

export default isVerifiedSlice.reducer;
