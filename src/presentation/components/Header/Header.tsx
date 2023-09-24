import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setDataAlbums,
  setOrderByName,
  setsForFindMyHit,
  tempSetFinded,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import styles from "./Header.module.scss";
import { Button } from "../Button";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const { orderByName, findedHits, tempFindedHits } =
    useSelector(setsForFindMyHit);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleBackClick = () => {
    sessionStorage.setItem("albums", "[]");
    dispatch(setDataAlbums([]));
    navigate("/");
  };

  return (
    <header className={styles.header__wrapper}>
      <div>
        {location.pathname === "/albums" && (
          <Button onClick={() => handleBackClick()}>{"<"}</Button>
        )}
      </div>
      <div className={styles["header-back__search"]}>
        {location.pathname !== "/albums" && (
          <>
            Find
            <input
              type="text"
              placeholder="your Hit..."
              value={searchInput}
              onChange={(e) => handleChange(e)}
            />
            <img src="./magnifying-glass.svg" alt="" />
          </>
        )}

        {location.pathname === "/albums" && (
          <>
            <h3>Album(s)</h3>
          </>
        )}
      </div>
      <div>
        {location.pathname !== "/albums" && (
          <div className={styles["header-order-menu"]}>
            <Button onClick={() => setShowMenu(!showMenu)}>
              <img src="./switch-vertical.svg" alt="" />
            </Button>

            {showMenu && (
              <div>
                <button
                  onClick={() => {
                    dispatch(setOrderByName(true));
                    setShowMenu(!showMenu);
                  }}
                >
                  Popularity
                </button>
                <button
                  onClick={() => {
                    dispatch(setOrderByName(false));
                    setShowMenu(!showMenu);
                  }}
                >
                  Alphabetical
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
