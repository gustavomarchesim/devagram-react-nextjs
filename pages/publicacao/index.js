import { useState } from 'react';
import { useRouter } from 'next/router';

import FeedService from 'services/FeedService';
const feedService = new FeedService();

import comAutorizacao from 'hoc/comAutorizacao';

import Button from 'components/button';
import CabecalhoComAcoes from 'components/cabecalhoComAcoes';
import UploadImagem from 'components/upload';

import imagemPub from '../../public/images/imagemPreview.svg';
import imagemSeta from '../../public/images/seta_Esquerda.svg';

const limiteDaDescricao = 255;
const minimoDescricao = 3;

function Publicacao() {
  const [imagem, setImagem] = useState();
  const [descricao, setDescricao] = useState('');
  const [inputImagem, setInputImagem] = useState();

  const router = useRouter();

  const cancelarImagem = () => {
    inputImagem.value = null;
    setImagem(null);
  };

  const validarDescricao = (e) => {
    const valorAtual = e.target.value;
    if (valorAtual.lenght >= limiteDaDescricao) {
      return;
    }
    setDescricao(valorAtual);
  };

  const validarPostagem = () => {
    return descricao.length >= minimoDescricao && imagem?.arquivo;
  };

  const publicar = async () => {
    try {
      if (!validarPostagem()) {
        alert('A postagem deve conter no minimo 3 caracteres e uma imagem!');
        return;
      }

      const corpoReqPostagem = new FormData();
      corpoReqPostagem.append('descricao', descricao);
      corpoReqPostagem.append('file', imagem.arquivo);

      await feedService.publicarPostagem(corpoReqPostagem);

      router.push('/');
    } catch (error) {
      alert('Erro ao concluir postagem!');
    }
  };

  return (
    <>
      <div className='paginaPublicacao larguraCentralDesktop fundoBranco'>
        <div className='paginaPublicacaoContainer'>
          <CabecalhoComAcoes
            className={imagem ? 'imagemPrincipal' : ''}
            titulo={'Nova Publicação'}
            elementoDireita={imagem ? 'Compartilhar' : ''}
            aoClicarElementoDireita={publicar}
            imagemEsquerda={imagem ? imagemSeta : null}
            aoClicarAcaoEsquerda={cancelarImagem}
          />

          <hr className='linhaDivisoria' />

          <div className='conteudoPaginaPublicacao'>
            <div className='primeiraEtapa'>
              <UploadImagem
                imagemPreviewClassName={
                  !imagem
                    ? 'previewImagemPublicacao'
                    : 'previewImagemSelecionada'
                }
                imagemPreview={imagem?.preview || imagemPub.src}
                setImagem={setImagem}
                aoSetarReferencia={setInputImagem}
              />

              {!imagem && (
                <span className='desktop paginaPublicacaoSpan'>
                  Arraste sua foto aqui!
                </span>
              )}

              {imagem && (
                <textarea
                  rows={3}
                  placeholder='Insira a descrição...'
                  value={descricao}
                  onChange={validarDescricao}
                />
              )}

              <Button
                type='submit'
                text={!imagem ? 'Selecionar imagem' : 'Selecionar outra imagem'}
                cor={'publicacao'}
                onClick={() => {
                  inputImagem?.click();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default comAutorizacao(Publicacao);
