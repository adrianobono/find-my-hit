import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { RootState } from "../../../config/sotore";

const initialState: any = {
  settings: {
    countFindRequests: 0,
  },
};

const findingRequestsListSlice = createSlice({
  name: "findingRequestsList",
  initialState,
  reducers: {
    updateCounter: (state, action: PayloadAction<{ count: number }>) => {
      const { count } = action.payload;
      state.settings.countFindRequests < 9
        ? (state.settings.countFindRequests = count)
        : (state.settings.countFindRequests = 0);
    },
  },
});

export const { actions: findingRequestsListSliceActions } =
  findingRequestsListSlice;

export default findingRequestsListSlice.reducer;
