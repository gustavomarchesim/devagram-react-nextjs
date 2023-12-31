import { useEffect, useState } from 'react';
import UserService from '../services/UserService';
import Login from '../components/login';
import Home from '../components/button/home';

const userService = new UserService();
export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(null);

  useEffect(() => {
    setEstaAutenticado(userService.estaAutenticado());
  }, []);

  if (estaAutenticado === null) {
    return null;
  }

  if (estaAutenticado) {
    return <Home />;
  }
  return <Login aposAutenticacao={() => setEstaAutenticado(true)} />;
}
