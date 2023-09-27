import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from './navbar';
import UserService from '../../services/UserService';
import logoHorizontal from '../../public/images/logo2.svg';
import imagemLupa from '../../public/images/lupa.svg';
import ResultadoPesquisa from './ResultadoPesquisa';

const userService = new UserService();

export default function Header() {
  const usuarioLogado = userService.obterInformacoesDoUsuarioLogado();

  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [termoPesquisado, setTermoPesquisado] = useState('');
  const router = useRouter();

  let cabecalhoClassName = '';
  if (window && window.location.pathname !== '/') {
    cabecalhoClassName = 'desktop';
  }

  const aoPesquisar = async (e) => {
    setTermoPesquisado(e.target.value);
    setResultadoPesquisa([]);

    if (termoPesquisado.length < 3) {
      return;
    }

    try {
      const { data } = await userService.Pesquisar(termoPesquisado);
      setResultadoPesquisa(data);
    } catch (error) {
      alert('Erro ao buscar usuário! ' + error?.response?.data?.erro);
    }
  };

  const aoClicarResultadoPesquisa = (id) => {
    setTermoPesquisado('');
    setResultadoPesquisa([]);
    router.push(`/perfil/${id}`);
  };

  return (
    <header className={`headerPrincipal ${cabecalhoClassName}`}>
      <div className='conteudoHeaderPrincipal'>
        <div className='logoHeaderPrincipal'>
          <Image
            src={logoHorizontal}
            alt='Logo Devagram'
            layout='fill'
          />
        </div>
        <div className='barraPesquisa'>
          <div className='containerImagemLupa'>
            <Image
              src={imagemLupa}
              alt='icone lupa'
              layout='fill'
            />
          </div>
          <input
            type='text'
            placeholder='Pesquisar'
            value={termoPesquisado}
            onChange={aoPesquisar}
          />
        </div>
        <Navbar
          className='desktop'
          usuarioLogado={usuarioLogado}
        />
      </div>
      {resultadoPesquisa.length > 0 && (
        <div className='resultadoPesquisaContainer'>
          {resultadoPesquisa.map((r) => (
            <ResultadoPesquisa
              avatar={r.avatar}
              nome={r.nome}
              email={r.email}
              key={r._id}
              id={r._id}
              onClick={aoClicarResultadoPesquisa}
            />
          ))}
        </div>
      )}
    </header>
  );
}
