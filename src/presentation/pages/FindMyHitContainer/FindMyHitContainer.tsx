import { useState, useEffect } from "react";
import { getBands } from "../../../services/DataBandsServices";
import { FindBandsDTO } from "../../../application/types/dto/find-bands.dto";

function FindMyHitContainer() {
  const [findBands, setFindBands] = useState<FindBandsDTO[]>([]);
  useEffect(() => {
    getBands().then((data) => setFindBands(data));
  }, []);
  return (
    <>
      <div className="app-title">Find my favorite hit</div>
      {findBands && <div>{JSON.stringify(findBands)}</div>}
    </>
  );
}

export default FindMyHitContainer;
