import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./page/About-me";
import Menu from "./components/Menu/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Inicio from "page/Inicio";
import Post from "page/Post";
import NaoEncontrada from "page/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";
import Agendamento from "page/Agendamento";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<AboutMe />} />
          <Route path="agendamento" element={<Agendamento />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;