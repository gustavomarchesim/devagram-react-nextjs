import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FazerComentario } from './FazerComentario';
import Avatar from '../avatar';

import imagemCurtida from '../../public/images/coracao.svg';
import imagemCurtido from '../../public/images/coracao_fill.svg';
import imagemComentario from '../../public/images/comentario.svg';
import imagemComentado from '../../public/images/comentario_fill.svg';

import FeedService from '../../services/FeedService';
const feedService = new FeedService();
export default function Postagem({
  id,
  usuario,
  fotoDoPost,
  descricao,
  comentarios,
  usuarioLogado,
}) {
  const [comentariosPostagem, setComentariosPostagem] = useState(comentarios);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [mostrarComentario, setMostrarComentario] = useState(false);
  const [mostrarCurtida, setMostrarCurtida] = useState(true);

  const handleClick = () => {
    setMostrarComentario(!mostrarComentario);
  };

  const texto = descricao;
  const textoExibido = mostrarMais ? texto : `${texto.substring(0, 93)}`;

  const handleCurtida = () => {
    setMostrarCurtida(!mostrarCurtida);
  };

  const comentar = async (comentario) => {
    try {
      await feedService.adicionarComentario(id, comentario);
      setMostrarComentario(false);
      setComentariosPostagem([
        ...comentariosPostagem,
        {
          nome: usuarioLogado.nome,
          mensagem: comentario,
        },
      ]);
    } catch (error) {
      alert(`Erro ao comentar! ` + error?.response?.data?.erro);
    }
    return Promise.resolve(true);
  };

  return (
    <div className='postagem'>
      <Link href={`/perfil/${usuario.id}`}>
        <section className='cabecalhoPostagem'>
          <Avatar src={usuario.avatar} />
          <strong>{usuario.nome}</strong>
        </section>
      </Link>

      <div className='fotoPostagem'>
        <img
          src={fotoDoPost}
          alt='Foto da Postagem'
        />
      </div>

      <div className='rodapePostagem'>
        <div className='acoesRodapePostagem'>
          <Image
            className='imagemCurtida'
            src={mostrarCurtida ? imagemCurtida : imagemCurtido}
            alt='icone Curtir'
            width={20}
            height={20}
            onClick={handleCurtida}
          />
          <Image
            className='imagemComentario'
            src={mostrarComentario ? imagemComentado : imagemComentario}
            alt='icone comentário'
            width={20}
            height={20}
            onClick={handleClick}
          />

          <span className='qntCurtidas'>
            Curtido por <strong>40000 pessoas!</strong>
          </span>
        </div>

        <div className='descricaoPostagem'>
          <strong className='nomeUsuario'>{usuario.nome}</strong>
          <p className='descricao'>
            <span onClick={() => setMostrarMais(!mostrarMais)}>
              {textoExibido}
              {texto.length > 93 && (
                <span className='exibirDescricao'>
                  {mostrarMais ? '...Ver menos' : '...Ver mais'}
                </span>
              )}
            </span>
          </p>
        </div>

        <div className='comentariosPostagem'>
          {comentariosPostagem.map((comentario, i) => (
            <div
              className='comentario'
              key={i}>
              <strong className='nomeUsuario'>{comentario.nome}</strong>
              <p className='descricao'>{comentario.mensagem}</p>
            </div>
          ))}
        </div>
      </div>

      {mostrarComentario && (
        <FazerComentario
          usuarioLogado={usuarioLogado}
          comentar={comentar}
        />
      )}
    </div>
  );
}
