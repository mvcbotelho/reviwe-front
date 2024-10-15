import React, { useState } from 'react';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button/';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate
import api from '../../../api'; // Sua configuração de API (Axios, por exemplo)

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializar o hook de navegação

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      // Chamar a API para fazer login
      const response = await api.post('/login', { email, password });
      const token = response.data.access_token;

      // Armazenar o token no localStorage
      localStorage.setItem('token', token);

      // Redirecionar para a Home após login bem-sucedido
      navigate('/home');
    } catch (err) {
      setError('Email ou senha inválidas. Tente novamente.');
    }
  };

  const handleNavigateToRegister = () => {
    navigate('/register'); // Redireciona para a página de registro
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto p-4 border rounded-lg shadow-md bg-white"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <FormField
        label="Email"
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <FormField
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button text="Entrar" onClick={() => console.log('Login submit')} />

      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-2">Não tem uma conta?</p>
        <Button
          text="Cadastre-se"
          onClick={handleNavigateToRegister}
          className="bg-gray-500"
        />
      </div>
    </form>
  );
};
