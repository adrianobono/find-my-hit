import { setIdsAlbums } from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import { FindBandsDTO } from "../../../application/types/dto";
import { Button } from "../Button";
import styles from "./List.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface ListProps {
  items: FindBandsDTO[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoadAlbums = (albums: string[]) => {
    dispatch(setIdsAlbums(albums));
    navigate("/find-my-hit/albums");
  };
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
              <Button
                id={`show-album-${index}`}
                onClick={() => {
                  handleLoadAlbums(band.albums);
                }}
              >
                +
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
