import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setOrderByName,
  setsForFindMyHit,
  tempSetFinded,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const { orderByName, findedHits, tempFindedHits } =
    useSelector(setsForFindMyHit);

  const filterData = (term: string) => {
    const filteredResults =
      term !== ""
        ? findedHits.filter((band) => {
            return band.name.toLowerCase().includes(searchInput.toLowerCase());
          })
        : findedHits;

    dispatch(tempSetFinded(filteredResults));
  };

  const handleChange = (e: any) => {
    setSearchInput(e.target.value);
    filterData(e.target.value);
  };

  useEffect(() => {
    console.log(orderByName);
    if (findedHits.length > 0) {
      const tempHits =
        tempFindedHits.length > 0 ? [...tempFindedHits] : [...findedHits];

      dispatch(
        tempSetFinded(
          orderByName
            ? tempHits.sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
            : tempHits.sort((a: any, b: any) => b.numPlays - a.numPlays)
        )
      );
    }
  }, [orderByName]);
  return (
    <header className={styles.header__wrapper}>
      <div>back</div>
      <div>
        Find:
        <input
          type="text"
          placeholder="Find your Hit..."
          value={searchInput}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        {" "}
        <button onClick={() => dispatch(setOrderByName())}>change</button>
      </div>
    </header>
  );
};
export default Header;
