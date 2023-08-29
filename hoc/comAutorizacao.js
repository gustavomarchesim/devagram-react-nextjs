import { useRouter } from "next/router"; //Manipula as rotas
import UserService from "../services/UserService";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const userService = new UserService();

export default function comAutorizacao(Componente) {
  return (props) => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      //Verifica se ja estamos no navegador
      if (!userService.estaAutenticado) {
        //Se o usuário NÃO estiver autenticado
        router.replace("/"); //Substitui a rota atual, jogando para a inicial
        return null; //Não renderiza nada
      }
      return (
        <>
          <Header/>
          <Componente {...props} />
          <Footer/>
        </>
      );
    }
    return null;
  };
}
