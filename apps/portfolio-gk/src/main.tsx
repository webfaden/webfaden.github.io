import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/app';
import Profil from './pages/profile';
import Projekte from './pages/projects';
import Home from './pages/home';
import './app/app.module.scss';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout-Komponente
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <Profil /> },
      { path: 'projects', element: <Projekte /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
