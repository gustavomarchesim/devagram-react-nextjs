import Avatar from '../avatar';
import Button from '../button';
import CabecalhoComAcoes from '../../components/cabecalhoComAcoes';

import imagemSetaEsquerda from '../../public/images/seta_Esquerda.svg';

export default function cabecalhoPerfil({ usuario }) {
  return (
    <div className='cabecalhoPerfil larguraCentralDesktop'>
      <CabecalhoComAcoes
        imagemEsquerda={imagemSetaEsquerda}
        titulo={usuario.nome}
      />
      <div className='statusPerfil'>
        <Avatar src={usuario.avatar} />
        <div className='statusContainer'>
          <div className='status'>
            <div className='statusDados'>
              <strong>{usuario.publicacoes}</strong>
              <span>Publicações</span>
            </div>
            <div className='statusDados'>
              <strong>{usuario.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div className='statusDados'>
              <strong>{usuario.seguidores}</strong>
              <span>Seguindo</span>
            </div>
          </div>
          <Button text='Seguir' />
        </div>
      </div>
    </div>
  );
}
