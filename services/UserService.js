import HttpService from './HttpService';

export default class UserService extends HttpService {
  async Login(credenciais) {
    const { data } = await this.post('/login', credenciais);

    localStorage.setItem('nome', data.nome);
    localStorage.setItem('email', data.email);
    localStorage.setItem('token', data.token);

    const usuario = await this.get('/usuario');
    localStorage.setItem('id', usuario.data._id);

    if (usuario.data.avatar) {
      localStorage.setItem('avatar', usuario.data.avatar);
    }
  }

  async Logout() {
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('avatar');
  }

  async Cadastro(dados) {
    return this.post('/cadastro', dados);
  }

  async Pesquisar(termoPesquisa) {
    return this.get('/pesquisa?filtro=' + termoPesquisa);
  }

  async buscarUsuario(idUsuario) {
    return this.get(`/pesquisa?id=${idUsuario}`);
  }

  async alternarSeguidores(idUsuario) {
    return this.put(`/seguir?id=${idUsuario}`);
  }

  async alterarUsuario(dados) {
    return this.put(`/usuario`, dados);
  }

  estaAutenticado() {
    return localStorage.getItem('token') !== null;
  }

  obterInformacoesDoUsuarioLogado() {
    return {
      id: localStorage.getItem('id'),
      nome: localStorage.getItem('nome'),
      email: localStorage.getItem('email'),
      avatar: localStorage.getItem('avatar'),
    };
  }
}
