import { useState, useEffect } from "react";
import { getBands } from "../../../services/DataBandsServices";
import { useSelector, useDispatch } from "react-redux";
import {
  setsForFindMyHit,
  setFinded,
  tempSetFinded,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";

function FindMyHitContainer() {
  const { countFindRequests, findedHits, tempFindedHits } =
    useSelector(setsForFindMyHit);
  const dispatch = useDispatch();

  useEffect(() => {
    getBands().then((data) => {
      dispatch(setFinded(data));
      dispatch(tempSetFinded(data));
    });
  }, []);

  return (
    <>
      {countFindRequests}

      <div className="app-title">Find my favorite hit</div>
      {findedHits && (
        <div>
          {(tempFindedHits.length > 0 ? tempFindedHits : findedHits).map(
            (band, index) => {
              return (
                <ul key={index}>
                  <li>{band.name}</li>
                  <li>{band.numPlays}</li>
                </ul>
              );
            }
          )}
        </div>
      )}
    </>
  );
}

export default FindMyHitContainer;
