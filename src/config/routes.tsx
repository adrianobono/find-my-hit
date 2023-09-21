import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindMyHitContainer from "../presentation/pages/FindMyHitContainer/FindMyHitContainer";
import Header from "../presentation/components/Header";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FindMyHitContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
