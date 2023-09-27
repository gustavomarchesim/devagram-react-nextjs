import { useEffect, useState } from 'react';

import Postagem from './Postagem';
import FeedService from '../../services/FeedService';
import UserService from '../../services/UserService';

const feedService = new FeedService();
const userService = new UserService();

export default function Feed({ usuarioPerfil }) {
  const usuarioLogado = userService.obterInformacoesDoUsuarioLogado();
  const [listaPostagens, setListaPostagens] = useState([]);

  useEffect(async () => {
    setListaPostagens([]);
    const { data } = await feedService.carregarPostagens(usuarioPerfil?._id);

    if (!usuarioLogado) {
      return;
    }

    const postagensFormatadas = data.map((postagem) => ({
      id: postagem._id,
      usuario: {
        id: postagem.idUsuario,
        nome: postagem?.usuario?.nome || usuarioPerfil?.nome,
        avatar: postagem?.usuario?.avatar || usuarioPerfil?.avatar,
      },
      fotoDoPost: postagem.foto,
      descricao: postagem.descricao,
      curtidas: postagem.likes,
      comentarios: postagem.comentarios.map((c) => ({
        nome: c.nome,
        mensagem: c.comentario,
      })),
    }));

    setListaPostagens(postagensFormatadas);
  }, [usuarioPerfil]);

  return (
    <div className='feedContainer larguraCentralDesktop'>
      {listaPostagens.map((dadosPostagem) => (
        <Postagem
          key={dadosPostagem.id}
          {...dadosPostagem}
          usuarioLogado={usuarioLogado}
        />
      ))}
    </div>
  );
}
