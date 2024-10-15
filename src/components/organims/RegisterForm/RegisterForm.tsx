import React, { useState } from 'react';
import { FormField } from '../../molecules/FormField';
import { Button } from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import api from '../../../api'; // Sua configuração de API

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      await api.post('/register', {
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        email,
        password,
      });

      // Redirecionar para a página de login após o cadastro
      navigate('/login');
    } catch (err) {
      setError('Erro ao criar o usuário. Tente novamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Cadastro</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <FormField
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <FormField
        label="Sobrenome"
        type="text"
        placeholder="Digite seu sobrenome"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <FormField
        label="Nome do usuário"
        type="text"
        placeholder="Digite seu nome de usuário"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
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
      <FormField
        label="Confirme sua senha"
        type="password"
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      <Button text="Cadastrar" onClick={() => {}} className="mt-4" />
    </form>
  );
};
