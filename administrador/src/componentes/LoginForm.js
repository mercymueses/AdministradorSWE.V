jsx
import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Usuario" required style={{ margin: '10px', padding: '10px', borderRadius: '5px' }} />
      </div>
      <div>
        <input type="password" placeholder="Contraseña" required style={{ margin: '10px', padding: '10px', borderRadius: '5px' }} />
      </div>
      <button type="submit" style={{ backgroundColor: '#00BFFF', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Inicio</button>
      <p>¿No tienes cuenta? <button style={{ background: 'none', border: 'none', color: '#00BFFF', cursor: 'pointer' }}>Registrate</button></p>
    </form>
  );
};

export default LoginForm;




