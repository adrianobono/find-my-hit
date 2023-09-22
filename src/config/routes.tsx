import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMyHitContainer from "../presentation/pages/FindMyHitContainer/FindMyHitContainer";
import Header from "../presentation/components/Header";
import FindMyAlbumContent from "../presentation/pages/FindMyAlbumContent/FindMyAlbumContent";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<FindMyHitContainer />} />
        <Route path="/albums" element={<FindMyAlbumContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
