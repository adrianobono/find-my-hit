import {
  setIdsAlbums,
  setMyBandSelected,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import { FindBandsDTO } from "../../../application/types/dto";
import styles from "./List.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface ListProps {
  items: FindBandsDTO[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      {items.map((band: FindBandsDTO, index: number) => {
        return (
          <div className={styles.list__wrapper} key={index}>
            <div>Band</div>
            <div>
              {band.name}
              <span>_| Played : {band.numPlays} times </span>
            </div>
            <div>
              <span
                onClick={() => {
                  dispatch(setIdsAlbums(band.albums));
                  navigate("/albums");
                }}
              >
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
