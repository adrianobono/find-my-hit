import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMyHitContainer from "../presentation/pages/FindMyHitContainer/FindMyHitContainer";
import Header from "../presentation/components/Header";
import FindMyBandContent from "../presentation/pages/FindMyBandContent/FindMyBandContent";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<FindMyHitContainer />} />
        <Route path="/band" element={<FindMyBandContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
