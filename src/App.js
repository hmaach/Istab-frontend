import Stagiaire from './components/stagiaire/Stagiaire';
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import NavBar from "./components/navBar/navbar";
import Right from "./components/right/right";
import Header from './components/header/Header';
import Accueil from './components/accueil/Accueil';
import Calendrier from './components/calendrier/Calendrier';
import Documents from './components/documents/Documents';
import Stagiaires from './components/stagiaires/Stagiaires';
import Login from './features/auth/Login';
import Layout from './features/auth/Layout';
import RequireAuth from './features/auth/RequireAuth';

const App = () => {
  return (
    <div id="container">
      {/* <HeaderWrapper/> */}
      <NavBarWrapper />
      <Routes>

        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route index path='/accueil' element={<Accueil />} />
          <Route path='/login' element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path='/calendrier' element={<Calendrier />} />
          </Route>


        </Route>

        <Route path='/s' element={[<Main />, <Right />]} />
        <Route path='/' element={<Accueil />} />
        <Route path='/accueil' element={<Accueil />} />
        <Route path='/login' element={<Login />} />
        <Route path='/stagiaires' element={<Stagiaires />} />
        <Route path='/documents' element={<Documents />} />
        <Route path='/profile' element={<Stagiaire />} />
      </Routes>
    </div>
  );
};

const NavBarWrapper = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  if (isLoginRoute) {
    return <div className='unableNav' id="nav-box"><NavBar /></div>;;
  }
  return (
    <div id="nav-box">
      <NavBar />
    </div>
  );
}
const HeaderWrapper = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === '/login';
  if (isLoginRoute) {
    return null;
  }
  return (
    <Header />
  );
}

export default App;
