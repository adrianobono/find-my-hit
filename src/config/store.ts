import { configureStore } from "@reduxjs/toolkit";
import FindingRequestsListSlice from "../application/features/findingRequestsListSlice/FindingRequestsListSlice";

export const store = configureStore({
  reducer: {
    findingRequestsListSlice: FindingRequestsListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
