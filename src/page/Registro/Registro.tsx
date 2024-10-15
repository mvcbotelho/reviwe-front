import React from 'react';
import { RegisterForm } from '../../components/organims/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Atualizado para v2

const Register = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login'); // Redireciona para a tela de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      {/* Seta de voltar */}
      <button
        onClick={handleBackToLogin}
        className="absolute top-4 left-4 flex items-center text-gray-700"
      >
        <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
        <span className="ml-2">Voltar</span>
      </button>

      {/* Formulário de cadastro */}
      <RegisterForm />
    </div>
  );
};

export default Register;
