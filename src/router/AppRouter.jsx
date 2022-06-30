import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import {HeroesRoutes} from '../heroes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
