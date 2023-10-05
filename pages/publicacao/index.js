import { useState } from 'react';
import { useRouter } from 'next/router';

import comAutorizacao from 'hoc/comAutorizacao';

import Button from 'components/button';
import CabecalhoComAcoes from 'components/cabecalhoComAcoes';
import UploadImagem from 'components/upload';

import imagemPub from '../../public/images/imagemPreview.svg';
import imagemSeta from '../../public/images/seta_Esquerda.svg';

function Publicacao() {
  const [imagem, setImagem] = useState();
  const [descricao, SetDescricao] = useState('');
  const [inputImagem, setInputImagem] = useState();

  const router = useRouter();

  const cancelarImagem = () => {
    inputImagem.value = null;
    setImagem(null);
  };

  return (
    <>
      <div className='paginaPublicacao larguraCentralDesktop fundoBranco'>
        <div className='paginaPublicacaoContainer'>
          <CabecalhoComAcoes
            className={imagem ? 'imagemPrincipal' : ''}
            titulo={'Nova Publicação'}
            elementoDireita={imagem ? 'Compartilhar' : ''}
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
                  onChange={(e) => SetDescricao(e.target.value)}
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
