import HttpService from "./HttpService";

export default class UserService extends HttpService {
  async Login(credenciais) {
    const { data } = await this.post("/login", credenciais);

    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);
  }

  async Cadastro(dados) {
    return this.post("/cadastro", dados);
  }
}
