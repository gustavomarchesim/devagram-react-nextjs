import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Avatar from '../avatar';
import Button from '../button';
import CabecalhoComAcoes from '../../components/cabecalhoComAcoes';

import imagemSetaEsquerda from '../../public/images/seta_Esquerda.svg';
import imagemLogout from '../../public/images/logout.svg';
import UserService from '../../services/UserService';
const userService = new UserService();

export default function cabecalhoPerfil({ usuario, estaNoPerfilPessoal }) {
  const [estaSeguindoOUsuario, setEstaSeguindoOUsuario] = useState(false);
  const [quantidadeSeguidores, setQuantidadeSeguidores] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!usuario) {
      return;
    }
    setQuantidadeSeguidores(usuario.seguidores);
    setEstaSeguindoOUsuario(usuario.segueEsseUsuario);
  }, [usuario]);

  const obterTextoBotao = () => {
    if (estaNoPerfilPessoal) {
      return 'Editar perfil';
    }
    if (estaSeguindoOUsuario) {
      return 'Deixar de Seguir';
    }
    return 'Seguir';
  };

  const obterCorDoBotao = () => {
    if (estaSeguindoOUsuario || estaNoPerfilPessoal) {
      return 'outline';
    }
    return 'primaria';
  };

  const manipularBotaoSeguir = async () => {
    if (estaNoPerfilPessoal) {
      return router.push('/perfil/editar');
    }

    try {
      await userService.alternarSeguidores(usuario._id);
      setQuantidadeSeguidores(
        estaSeguindoOUsuario
          ? quantidadeSeguidores - 1
          : quantidadeSeguidores + 1
      );
      setEstaSeguindoOUsuario(!estaSeguindoOUsuario);
    } catch (error) {
      alert('Erro ao seguir/deseguir o usuário!');
    }
  };

  const aoClicarSetaEsquerda = () => {
    router.back();
  };

  const logout = () => {
    userService.Logout();
    router.push('/');
  };

  return (
    <div className='cabecalhoPerfil larguraCentralDesktop'>
      <CabecalhoComAcoes
        imagemEsquerda={estaNoPerfilPessoal ? null : imagemSetaEsquerda}
        aoClicarAcaoEsquerda={aoClicarSetaEsquerda}
        titulo={usuario.nome}
        elementoDireita={
          estaNoPerfilPessoal && (
            <Image
              src={imagemLogout}
              alt='Imagem da esquerda'
              onClick={logout}
              width={24}
              height={24}
            />
          )
        }
      />
      <div className='statusPerfil'>
        <Avatar src={usuario.avatar} />
        <div className='statusContainer'>
          <div className='status'>
            <div className='statusDados'>
              <strong>{usuario.publicacoes}</strong>
              <span>Publicações</span>
            </div>
            <div className='statusDados'>
              <strong>{quantidadeSeguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div className='statusDados'>
              <strong>{usuario.seguindo}</strong>
              <span>Seguindo</span>
            </div>
          </div>
          <Button
            text={obterTextoBotao()}
            cor={obterCorDoBotao()}
            onClick={manipularBotaoSeguir}
          />
        </div>
      </div>
    </div>
  );
}
