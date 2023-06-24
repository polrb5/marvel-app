import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout.tsx';
import ComicDetail from './pages/ComicDetail.tsx';
import Home from './pages/Home.tsx';

const RoutesComponent = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<ComicDetail />} path="/comic/:id" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Route>
  </Routes>
);

export default RoutesComponent;
