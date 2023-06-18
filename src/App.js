import Stagiaire from './components/stagiaire/Stagiaire';
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navbar";
import Header from './components/header/Header';
import Accueil from './components/accueil/Accueil';
import Calendrier from './components/calendrier/Calendrier';
import Stagiaires from './components/stagiaires/Stagiaires';
import Login from './features/auth/Login';
import Layout from './features/auth/Layout';
import RequireAuth from './features/auth/RequireAuth';
import { useDispatch } from 'react-redux';
import { setCredentials } from './features/auth/authSlice';
import RequireAdmin from './features/auth/RequireAdmin';
import SearchAccueil from './components/accueil/SearchAccueil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/profile/Profile';
import Archives from './components/archives/Archives';
import Calendar from './components/calandar/Calandar';
const { localStorage } = window;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      dispatch(setCredentials(credentials));
    }
  }, [dispatch]);

  const token = localStorage.getItem('token');
  // console.log(token);
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && token) {
    dispatch(setCredentials({ user, token }));
  }
  return (
    <div id="container">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HeaderWrapper />
      <NavBarWrapper />
      <Routes>
        <Route path='/' element={<Layout />}>

          {/* public routes */}
          <Route index path='/accueil' element={<Accueil />} />
          <Route index path='/recherche' element={<SearchAccueil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Accueil />} />
          <Route path='/stagiaires' element={<Stagiaires />} />
          <Route path='/stagiaire' element={<Stagiaire />} />

          <Route path='/archives' element={<Archives />} />
          <Route path='/calendrier' element={<Calendrier />} />

          <Route path='/c' element={<Calendar />} />
          <Route path='/profile/:id' element={<Stagiaire />} />

          {/* protected routes (require login) */}
          <Route element={<RequireAuth />}>
           
          </Route>

          {/* admin routes */}
          <Route element={<RequireAdmin />}>
          </Route>
        </Route>
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
