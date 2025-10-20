import React from 'react';
import PagPrincipal from './img/PagPrincipal.png';


function UsuarioPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src={PagPrincipal}
        alt="Página Principal"
        style={{
          width: '300px',
          height: 'auto',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  );
}
export default UsuarioPage;