import { useRouter } from 'next/router';

import UserService from '../services/UserService';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const userService = new UserService();

export default function comAutorizacao(Componente) {
  return (props) => {
    const router = useRouter();
    if (typeof window !== 'undefined') {
      if (!userService.estaAutenticado) {
        router.replace('/');
        return null;
      }

      const usuarioLogado = userService.obterInformacoesDoUsuarioLogado();
      return (
        <>
          <Header usuarioLogado={usuarioLogado} />
          <Componente
            usuarioLogado={usuarioLogado}
            {...props}
          />
          <Footer usuarioLogado={usuarioLogado} />
        </>
      );
    }
    return null;
  };
}
