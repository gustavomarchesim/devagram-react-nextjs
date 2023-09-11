import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Avatar from '../avatar';

import imagemCurtida from '../../public/images/coracao.svg';
import imagemCurtido from '../../public/images/coracao_fill.svg';
import imagemComentario from '../../public/images/comentario.svg';
import imagemComentado from '../../public/images/comentario_fill.svg';
import { FazerComentario } from './fazerComentario';

export default function Postagem({
  user,
  fotoDoPost,
  descricao,
  comentarios,
  usuarioLogado,
}) {
  const [mostrarMais, setMostrarMais] = useState(false);
  const texto = descricao;
  const textoExibido = mostrarMais ? texto : `${texto.substring(0, 93)}`;

  const [mostrarComentario, setMostrarComentario] = useState(false);
  return (
    <div className='postagem'>
      <Link href={`/perfil/${user.id}`}>
        <section className='cabecalhoPostagem'>
          <Avatar src={user.avatar} />
          <strong>{user.nome}</strong>
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
            src={imagemCurtida}
            alt='icone Curtir'
            width={20}
            height={20}
            onClick={() => console.log('Curtir!')}
          />
          <Image
            className='imagemComentario'
            src={imagemComentario}
            alt='icone comentário'
            width={20}
            height={20}
            onClick={() => setMostrarComentario(!mostrarComentario)}
          />

          <span className='qntCurtidas'>
            Curtido por <strong>32 pessoas!</strong>
          </span>
        </div>

        <div className='descricaoPostagem'>
          <strong className='nomeUsuario'>{user.nome}</strong>
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
          {comentarios.map((comentario, i) => (
            <div
              className='comentario'
              key={i}>
              <strong className='nomeUsuario'>{comentario.nome}</strong>
              <p className='descricao'>{comentario.mensagem}</p>
            </div>
          ))}
        </div>
      </div>

      {mostrarComentario && <FazerComentario usuarioLogado={usuarioLogado} />}
    </div>
  );
}
