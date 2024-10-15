import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/atoms/Button';

const Home = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // Se o token não estiver presente, redirecionar para o login
    if (!token) {
      navigate('/login');
    } else {
      const decodedToken: { email: string } = jwtDecode(token);
      setUserEmail(decodedToken.email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login realizado com sucesso!</h1>
      {userEmail ? (
        <p className="text-lg">Bem-vindo, {userEmail}!</p>
      ) : (
        <p>Carregando...</p>
      )}
      <Button text="Logout" onClick={handleLogout} className="w-auto px-6" />
    </div>
  );
};

export default Home;
