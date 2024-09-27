import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import Erro404 from './pages/Erro404';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroCategoria from './pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route element={<Erro404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);