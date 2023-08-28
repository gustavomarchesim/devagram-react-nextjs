import { useRouter } from "next/router";
import UserService from "../services/UserService";

const userService = new UserService();

export default function comAutorizacao(Componente) {
  return (props) => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      if (!userService.estaAutenticado) {
        router.replace("/");
        return null;
      }
      return <Componente {...props} />;
    }
    return null;
  };
}
