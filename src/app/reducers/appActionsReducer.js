import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = { appIsWorking: false };

const appActionsSlice = createSlice({
  name: "appActions",
  initialState,
  reducers: {
    reportError(state, action) {
      toast.warn(action.payload, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    clearErrors(state) {
      toast.dismiss();
    },
    setAppIsWorking(state, action) {
      state.appIsWorking = action.payload;
    },
  },
});

export const appActions = appActionsSlice.actions;
export default appActionsSlice.reducer;
