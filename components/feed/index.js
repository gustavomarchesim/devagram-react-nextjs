import { useEffect, useState } from 'react';

import Postagem from './Postagem';

export function Feed({ usuarioLogado }) {
  const [listaPostagens, setListaPostagens] = useState([]);
  useEffect(() => {
    console.log('Carrega o feed!');
    setListaPostagens([
      {
        id: '01',
        user: {
          id: '01',
          nome: 'Gustavo',
          avatar: null,
        },
        fotoDoPost:
          'https://scontent.fqsc2-1.fna.fbcdn.net/v/t39.30808-6/254924879_4405815609528830_8147075057023944728_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=SI7Z6DxDeYoAX-UQC4k&_nc_ht=scontent.fqsc2-1.fna&oh=00_AfAIwEJOEy_coA9-SRjw3nFSTumh4F17LBSMknKJW5rjtw&oe=6503CA83',
        descricao:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque eligendi temporibus hic. Earum debitis quo distinctio quisquam architecto blanditiis voluptatibus, ratione autem, voluptatem ad, dolorum fugiat. Accusamus, illum necessitatibus.',
        curtidas: [],
        comentarios: [
          {
            nome: 'Usuário 1',
            mensagem: 'Comentário teste!',
          },
        ],
      },
      {
        id: '02',
        user: {
          id: '02',
          nome: 'Tainara',
          avatar: null,
        },
        fotoDoPost:
          'https://cdn.cosmicjs.com/ba1cc080-4382-11ee-88fe-05e0292fd38f-347230015_568129948783340_7267898967119779367_n.jpg',
        descricao:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloremque eligendi. Earum debitis quo distinctio quisquam architecto blanditiis voluptatibus, ratione autem, voluptatem ad, dolorum fugiat. Accusamus, illum necessitatibus',
        curtidas: [],
        comentarios: [
          {
            nome: 'Usuário 2',
            mensagem: 'Comentário teste 2!',
          },
        ],
      },
    ]);
  }, [usuarioLogado]);

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
