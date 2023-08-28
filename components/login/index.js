import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";
import InputPublico from "../inputPublico";
import { validarEmail, validarSenha } from "../../utils/validadores";
import UserService from "../../services/UserService";

import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import imagemLogo from "../../public/images/logo.svg";

const userService = new UserService();

export default function Login({aposAutenticacao}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [estaSubmetendo, setEstaSubmetendo] = useState(false);

  const validarFormulario = () => {
    return validarEmail(email) && validarSenha(senha);
  };

  const aoSubmeter = async (e) => {
    e.preventDefault();
    if (!validarFormulario) {
      return;
    }

    setEstaSubmetendo(true);

    try {
      await userService.Login({
        login: email,
        senha,
      });

      if(aposAutenticacao){
        aposAutenticacao();
      }

    } catch (error) {
      alert("Erro ao realizar Login! " + error?.response?.data?.erro);
    }

    setEstaSubmetendo(false);
  };

  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer">
        <Image
          src={imagemLogo}
          alt="Logo Devaria"
          layout="fill"
          className="logo"
        />
      </div>

      <div className="paginaPublicaConteudo">
        <form onSubmit={aoSubmeter}>
          <InputPublico
            imagem={imagemEnvelope}
            placeholder="E-mail"
            valor={email}
            tipo="email"
            aoAlterarValor={(e) => setEmail(e.target.value)}
            mensagemValidacao="O e-mail informado é inválido!"
            exibirMensagemValidacao={email && !validarEmail(email)}
          />
          <InputPublico
            imagem={imagemChave}
            placeholder="Senha"
            valor={senha}
            tipo="password"
            aoAlterarValor={(e) => setSenha(e.target.value)}
            mensagemValidacao="Usuário ou Senha inválido!"
            exibirMensagemValidacao={senha && !validarSenha(senha)}
          />
          <Button
            text="Login"
            type="submit"
            desabilitado={!validarFormulario() || estaSubmetendo}
          />
        </form>
        <div className="rodapePaginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora!</Link>
        </div>
      </div>
    </section>
  );
}
