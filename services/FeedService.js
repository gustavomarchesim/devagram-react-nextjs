import HttpService from './HttpService';

export default class FeedService extends HttpService {
  async carregarPostagens(idUsuario) {
    let url = '/feed';
    if (idUsuario) {
      url += `?id=${idUsuario}`;
    }
    return this.get(url);
  }

  async adicionarComentario(idPostagem, comentario) {
    return this.put(`/comentario?id=${idPostagem}`, {
      comentario,
    });
  }

  async adicionarCurtida(idPostagem) {
    return this.put(`/like?id=${idPostagem}`);
  }

  async publicarPostagem(dados) {
    return this.post(`/publicacao`, dados);
  }
}
