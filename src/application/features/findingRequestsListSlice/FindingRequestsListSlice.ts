import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../config/store";
import { FindBandsDTO } from "../../types/dto";

interface FindMyHitState {
  countFindRequests: number;
  orderByName: boolean;
  findedHits: FindBandsDTO[];
  tempFindedHits: FindBandsDTO[];
}

const initialState: FindMyHitState = {
  countFindRequests: 0,
  orderByName: false,
  findedHits: [],
  tempFindedHits: [],
};

const findingRequestsListSlice = createSlice({
  name: "finding",
  initialState,
  reducers: {
    setOrderByName(state) {
      state.orderByName = !state.orderByName;
    },

    setFinded(state, action) {
      console.log(state, action);
      state.findedHits = action.payload;
    },
    tempSetFinded(state, action) {
      state.tempFindedHits = action.payload;
    },

    updateCounter: (state) => {
      state.countFindRequests < 9
        ? state.countFindRequests++
        : (state.countFindRequests = 0);
    },
  },
});

export const { actions: findingRequestsListSliceActions } =
  findingRequestsListSlice;

export const setsForFindMyHit = (state: RootState) => state.findingRequestsList;

export const { setOrderByName, updateCounter, setFinded, tempSetFinded } =
  findingRequestsListSlice.actions;

export default findingRequestsListSlice.reducer;
