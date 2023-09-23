import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../../../services/DataAlbumsServices";
import { FindAlbumsDTO } from "../../../application/types/dto";
import { useNavigate } from "react-router-dom";
import {
  setDataAlbums,
  setsForFindMyHit,
} from "../../../application/features/findingRequestsListSlice/FindingRequestsListSlice";
import styles from "./FindMyAlbumContent.module.scss";

function FindMyAlbumContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { albumsIds, dataAlbums } = useSelector(setsForFindMyHit);
  const albums: FindAlbumsDTO[] = [];
  const tempAlbums: any = sessionStorage.getItem("albums");

  const findAlbums = async () => {
    albumsIds.map((id: string) => {
      getAlbums(id).then((data) => {
        albums.push(data);
      });
    });
  };

  useEffect(() => {
    if (tempAlbums && tempAlbums !== "[]") {
      setTimeout(() => {
        dispatch(setDataAlbums(JSON.parse(tempAlbums)));
      }, 500);
    } else {
      Promise.all([findAlbums()])
        .then(() => {
          setTimeout(() => {
            albums.length === 0 && navigate("/");
            sessionStorage.setItem("albums", JSON.stringify(albums));
            dispatch(setDataAlbums(albums));
          }, 500);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div className={styles["find-album__wrapper"]}>
      {dataAlbums.length > 0 &&
        dataAlbums.map((item, index) => (
          <div key={index} className={styles["find-album__card"]}>
            <div className={styles["find-album__card--block"]}>
              <img src={item.image} height={120} alt="" />
              <p>Album: {item.name}</p>
            </div>
            <ul className={styles["find-album-accordion"]}>
              <li tabIndex={0}>
                + Biography
                <ul>
                  <li className={styles["find-album-accordion-bio"]}>
                    {item.band.biography.split("<")[0]}
                  </li>
                </ul>
              </li>
              <li tabIndex={1}>
                +Tracks
                <ul>
                  <li>
                    {item.tracks.map((track) => (
                      <div className={styles["find-album-accordion-tracks"]}>
                        <div>
                          <b>Title:</b> {track.name}
                        </div>
                        <div>
                          <b>Duration</b>:{" "}
                          {Math.floor(Number(track.duration) / 60)}m :{" "}
                          {Number(track.duration) -
                            Math.floor(Number(track.duration) / 60) * 60}
                          s
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default FindMyAlbumContent;
