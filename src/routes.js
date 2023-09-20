import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./page/Inicio";
import AboutMe from "./page/About-me";
import Menu from "./components/Menu/Menu";
import Rodape from "components/Rodape";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<div>Página Não Encontrada!</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;