import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../config/store";
import { FindBandsDTO } from "../../types/dto";

interface FindMyHitState {
  orderByName: boolean;
  onHome: boolean;
  findedHits: FindBandsDTO[];
  tempFindedHits: FindBandsDTO[];
}

const initialState: FindMyHitState = {
  onHome: true,
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
    setOnHome(state) {
      state.onHome = !state.onHome;
    },

    setFinded(state, action) {
      console.log(state, action);
      state.findedHits = action.payload;
    },
    tempSetFinded(state, action) {
      state.tempFindedHits = action.payload;
    },
  },
});

export const { actions: findingRequestsListSliceActions } =
  findingRequestsListSlice;

export const setsForFindMyHit = (state: RootState) => state.findingRequestsList;

export const { setOrderByName, setFinded, tempSetFinded } =
  findingRequestsListSlice.actions;

export default findingRequestsListSlice.reducer;
