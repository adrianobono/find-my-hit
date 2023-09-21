import { FindBandsDTO } from "../../../application/types/dto";
import styles from "./List.module.scss";
interface ListProps {
  items: FindBandsDTO[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      {items.map((band: FindBandsDTO, index: number) => {
        return (
          <div className={styles.list__wrapper} key={index}>
            <div>Band</div>
            <div>
              {band.name}
              <span>| Played Times: {band.numPlays} |</span>
            </div>
            <div>
              <span>+</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
