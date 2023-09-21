import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMyHitContainer from "../presentation/pages/FindMyHitContainer/FindMyHitContainer";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={FindMyHitContainer} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
