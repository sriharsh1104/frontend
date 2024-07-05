import { createSlice } from "@reduxjs/toolkit";
// import { AuthenticaionData } from "../../Constants/Types/User/authenticationDataType/authenticationDataType";

// Initial state for user data
const initialState: any = {
  jwtToken: "",
};

// User Data Slice
export const authenticationDataSlice = createSlice({
  name: "authenticationData",
  initialState,
  reducers: {
    resetAuthenticationDataSlice: () => initialState,

    setJwtToken: (state, action) => {
      state.jwtToken = action.payload;
    },
   
  },
});

export const {
  resetAuthenticationDataSlice,
  setJwtToken,
} = authenticationDataSlice.actions;

export default authenticationDataSlice.reducer;
