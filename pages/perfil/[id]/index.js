import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserService from '../../../services/UserService';
import comAutorizacao from '../../../hoc/comAutorizacao';

import Feed from '../../../components/feed';
import CabecalhoPerfil from '../../../components/cabecalhoPerfil';

const userService = new UserService();

function Perfil() {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();
  const obterUsuario = async (idUsuario) => {
    try {
      const { data } = await userService.buscarUsuario(idUsuario);
      return data;
    } catch (error) {
      alert('Erro ao buscar usuário!');
    }
  };

  useEffect(async () => {
    if (!router.query.id) {
      return;
    }
    const dadosPerfil = await obterUsuario(router.query.id);
    setUsuario(dadosPerfil);
  }, [router.query.id]);

  return (
    <div className='paginaPerfil'>
      <CabecalhoPerfil usuario={usuario} />
      <Feed usuarioPerfil={usuario} />
    </div>
  );
}

export default comAutorizacao(Perfil);
