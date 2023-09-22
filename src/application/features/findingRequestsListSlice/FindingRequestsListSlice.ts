import { getAlbums } from "./../../../services/DataAlbumsServices";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../config/store";
import { FindAlbumsDTO, FindBandsDTO } from "../../types/dto";

interface FindMyHitState {
  orderByName: boolean;

  findedHits: FindBandsDTO[];
  tempFindedHits: FindBandsDTO[];
  myBandId: string;
  albumsIds: [];
  dataAlbuns: FindAlbumsDTO[];
}

const initialState: FindMyHitState = {
  orderByName: false,
  findedHits: [],
  tempFindedHits: [],
  myBandId: "",
  dataAlbuns: [],
  albumsIds: [],
};

const findingRequestsListSlice = createSlice({
  name: "finding",
  initialState,
  reducers: {
    setOrderByName(state, action) {
      state.orderByName = action.payload;
    },

    setFinded(state, action) {
      console.log(state, action);
      state.findedHits = action.payload;
    },
    tempSetFinded(state, action) {
      state.tempFindedHits = action.payload;
    },
    setMyBandSelected(state, action) {
      state.myBandId = action.payload;
    },
    setDataAlbums(state, action) {
      state.dataAlbuns = action.payload;
    },
    setIdsAlbums(state, action) {
      state.albumsIds = action.payload;
    },
  },
});

export const { actions: findingRequestsListSliceActions } =
  findingRequestsListSlice;

export const setsForFindMyHit = (state: RootState) => state.findingRequestsList;

export const {
  setOrderByName,
  setFinded,
  setIdsAlbums,
  setDataAlbums,
  setMyBandSelected,
  tempSetFinded,
} = findingRequestsListSlice.actions;

export default findingRequestsListSlice.reducer;
