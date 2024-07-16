import { createSlice } from "@reduxjs/toolkit";

// Initial state for user data
const initialState: any = {
  loginData: "",
  myBlogData:"",
};

// User Data Slice
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetUserDataSlice: () => initialState,
    setLoginData: (state:any, action:any) => {
      state.loginData = action.payload;
    },
    setMyBlogData: (state:any, action:any) => {
      state.myBlogData = action.payload;
    },
  },
});

export const { resetUserDataSlice, setLoginData, setMyBlogData} = userDataSlice.actions;

export default userDataSlice.reducer;
