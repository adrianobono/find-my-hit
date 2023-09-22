import { useEffect } from "react";
import { getBands } from "../../../services/DataBandsServices";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FindMyHitContainer.module.scss";
import {
  setsForFindMyHit,
  setFinded,
  tempSetFinded,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import List from "../../components/List";

function FindMyHitContainer() {
  const { findedHits, tempFindedHits } = useSelector(setsForFindMyHit);
  const dispatch = useDispatch();

  useEffect(() => {
    getBands().then((data) => {
      dispatch(setFinded(data));
      dispatch(tempSetFinded(data));
    });
  }, []);

  return (
    <>
      <div className="app-title">Find my favorite hit</div>
      {findedHits && (
        <div className={styles["find-hit__wrapper"]}>
          <List
            items={tempFindedHits.length > 0 ? tempFindedHits : findedHits}
          />
        </div>
      )}
    </>
  );
}

export default FindMyHitContainer;
