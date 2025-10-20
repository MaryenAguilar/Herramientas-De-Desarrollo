import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminPage from './AdminPage';
import UsuarioPage from './UsuarioPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/usuario" element={<UsuarioPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
