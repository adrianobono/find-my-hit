import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMyHitContainer from "../presentation/pages/FindMyHitContainer/FindMyHitContainer";
import Header from "../presentation/components/Header";
import FindMyAlbumsContent from "../presentation/pages/FindMyAlbumsContent/FindMyAlbumsContent";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/find-my-hit/" element={<FindMyHitContainer />} />
        <Route path="/find-my-hit/albums/" element={<FindMyAlbumsContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
