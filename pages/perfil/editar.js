import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import UserService from 'services/UserService';

import CabecalhoComAcoes from 'components/cabecalhoComAcoes';
import comAutorizacao from '../../hoc/comAutorizacao';
import UploadImagem from 'components/upload';

import imagemAvatarPadrao from '../../public/images/avatar.svg';
import imagemLimpar from '../../public/images/remove.svg';
import { validarNome } from 'utils/validadores';

const userService = new UserService();

function EditarPerfil({ usuarioLogado }) {
  const [avatar, setAvatar] = useState();
  const [inputAvatar, setInputAvatar] = useState();
  const [nome, setNome] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!usuarioLogado) {
      return;
    }
    setNome(usuarioLogado.nome);
    setAvatar({
      preview: usuarioLogado.avatar,
    });
  }, []);

  const atualizarPerfil = async () => {
    try {
      if (!validarNome(nome)) {
        alert('Insira pelo menos dois caracteres!');
        return;
      }
      const corpoReqAtualizar = new FormData();
      corpoReqAtualizar.append('nome', nome);

      if (avatar.arquivo) {
        corpoReqAtualizar.append('file', avatar.arquivo);
        localStorage.setItem('avatar', avatar.preview);
      }

      await userService.alterarUsuario(corpoReqAtualizar);
      localStorage.setItem('nome', nome);
      router.push(`/perfil/${usuarioLogado.id}`);
    } catch (error) {
      alert('Erro ao atualizar perfil!');
    }
  };

  const acaoElementoEsquerdo = () => {
    router.back();
  };

  const abrirSeletorDeArquivos = () => {
    inputAvatar?.click();
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
            aoClicarElementoDireita={atualizarPerfil}
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
