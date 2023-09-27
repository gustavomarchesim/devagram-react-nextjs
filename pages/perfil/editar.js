import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import UserService from 'services/UserService';

import CabecalhoComAcoes from 'components/cabecalhoComAcoes';
import comAutorizacao from '../../hoc/comAutorizacao';
import Avatar from 'components/avatar';
import UploadImagem from 'components/upload';

import imagemAvatarPadrao from '../../public/images/avatar.svg';
import imagemLimpar from '../../public/images/remove.svg';

const userService = new UserService();

function EditarPerfil({ usuarioLogado }) {
  const [avatar, setAvatar] = useState();
  const [inputAvatar, setInputAvatar] = useState();
  const [nome, setNome] = useState('');
  const router = useRouter();

  const acaoElementoEsquerdo = () => {
    router.back();
  };

  const abrirSeletorDeArquivos = () => {
    console.log('Abrir seletor');
  };

  return (
    <>
      <div className='paginaEditarPerfil larguraCentralDesktop'>
        <div className='paginaEditarPerfilContainer'>
          <CabecalhoComAcoes
            titulo={'Editar Perfil'}
            textoEsquerda={'Cancelar'}
            aoClicarAcaoEsquerda={acaoElementoEsquerdo}
            elementoDireita={'Concluir'}
            aoClicarElementoDireita={() =>
              console.log('Clique elemento direita')
            }
          />

          <hr className='linhaDivisoria' />

          <div className='paginaEditarPrincipalAvatar'>
            <UploadImagem
              setImagem={setAvatar}
              imagemPreview={avatar?.preview || imagemAvatarPadrao.src}
              aoSetarReferencia={setInputAvatar}
              imagemPreviewClassName='avatar'
            />
            <span onClick={abrirSeletorDeArquivos}>Alterar foto do perfil</span>
          </div>

          <hr className='linhaDivisoria' />

          <div className='edicaoNome'>
            <label>Nome</label>
            <input
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Image
              src={imagemLimpar}
              alt='icone limpar'
              onClick={(e) => setNome('')}
            />
          </div>
          <hr className='linhaDivisoria' />
        </div>
      </div>
    </>
  );
}

export default comAutorizacao(EditarPerfil);
