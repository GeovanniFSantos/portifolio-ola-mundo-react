import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./page/About-me";
import Menu from "./components/Menu/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Inicio from "page/Inicio";
import Post from "page/Post";
import NaoEncontrada from "page/NaoEncontrada";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;