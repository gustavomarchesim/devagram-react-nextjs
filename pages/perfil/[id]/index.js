import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import comAutorizacao from '../../../hoc/comAutorizacao';

import Feed from '../../../components/feed';
import CabecalhoPerfil from '../../../components/cabecalhoPerfil';

function Perfil({ usuarioLogado }) {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();
  useEffect(async () => {
    setUsuario({
      nome: 'Gustavo Marchesim',
    });
  }, [router.query.id]);
  return (
    <div className='paginaPerfil'>
      <CabecalhoPerfil usuario={usuario} />
      <Feed usuarioLogado={usuarioLogado} />
    </div>
  );
}

export default comAutorizacao(Perfil);
