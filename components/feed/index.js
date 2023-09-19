import { useEffect, useState } from 'react';

import Postagem from './Postagem';
import FeedService from '../../services/FeedService';
import UserService from '../../services/UserService';

const feedService = new FeedService();
const userService = new UserService();

export default function Feed() {
  const usuarioLogado = userService.obterInformacoesDoUsuarioLogado();
  const [listaPostagens, setListaPostagens] = useState([]);
  useEffect(async () => {
    const { data } = await feedService.carregarPostagens();

    const postagensFormatadas = data.map((postagem) => ({
      id: postagem._id,
      usuario: {
        id: postagem.idUsuario,
        nome: postagem.usuario.nome,
        avatar: postagem.usuario.avatar,
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
  }, []);

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
