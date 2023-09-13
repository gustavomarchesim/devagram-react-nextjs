import { useState } from 'react';

import Avatar from '../avatar';

export function FazerComentario({ usuarioLogado, comentar }) {
  const [linhas, setLinhas] = useState(1);
  const [comentario, setComentario] = useState('');

  const aoDigitar = (e) => {
    const valorInput = e.target.value.trim();
    setComentario(valorInput);
    setLinhas(valorInput.length > 0 ? 2 : 1);
  };

  const aoPressionarTecla = (e) => {
    if (e.key === 'Enter') {
      manipularComentario();
    }
  };

  const manipularComentario = () => {
    if (comentario.trim().length === 0 || !comentar) {
      return;
    }
  };
  return (
    <span className='containerFazerComentario'>
      <Avatar src={usuarioLogado.avatar} />
      <textarea
        rows={linhas}
        onChange={aoDigitar}
        onKeyDown={aoPressionarTecla}
        value={comentario}
        placeholder='Insira um comentário'>
      </textarea>
      <button
        type='button'
        className='btnFeed desktop'
        onClick={() => console.log('Publicar')}>
        Publicar
      </button>
    </span>
  );
}
