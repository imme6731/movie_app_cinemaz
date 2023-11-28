import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { ViewMore } from "./pages/viewMore/ViewMore";
import { Genre } from "./pages/genre/Genre";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.viewMore} element={<ViewMore />} />
        <Route path={routes.genre} element={<Genre />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path={routes.pageNotFound} element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default Router;
