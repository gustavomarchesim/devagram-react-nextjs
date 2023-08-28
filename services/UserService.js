import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async Login(credenciais) {
    const { data } = await this.post("/login", credenciais);

    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);

    const usuario = await this.get("/usuario");
    localStorage.setItem("id", usuario.data._id);

    if(usuario.data.avatar) {
      localStorage.setItem("avatar", usuario.data.avatar);
    }
  }

  async Cadastro(dados) {
    return this.post("/cadastro", dados);
  }

  estaAutenticado() {
    return localStorage.getItem('token') !== null;
  }
}
