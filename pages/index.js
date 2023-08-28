import { useEffect, useState } from "react";

import UserService from "../services/UserService";
import Login from "../components/login";
import Home from "../components/home";

const userService = new UserService();
export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    setEstaAutenticado(userService.estaAutenticado());
  }, []);

  if (estaAutenticado) {
    return <Home />;
  }
  return <Login aposAutenticacao={() => setEstaAutenticado(true)} />;
}
