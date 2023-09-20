import { useState, useEffect } from "react";
import "./app.scss";
import { getBands } from "./services/DataBandsServices";
import { FindBandsDTO } from "./application/types/find-bands.dto";

function App() {
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

export default App;
