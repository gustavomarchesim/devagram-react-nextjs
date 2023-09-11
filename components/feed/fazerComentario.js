import Avatar from '../avatar';
import UserService from '../../services/UserService';

const userService = new UserService();
export function FazerComentario() {
  const usuarioLogado = userService.obterInformacoesDoUsuarioLogado();
  return (
    <span className='containerFazerComentario'>
      <Avatar src={usuarioLogado.avatar} />
      <textarea
        rows='1'
        placeholder='Insira um comentário'>
      </textarea>
    </span>
  );
}
