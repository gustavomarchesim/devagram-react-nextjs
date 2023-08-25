import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";
import InputPublico from "../inputPublico";
import { validarEmail, validarSenha } from "../../utils/validadores";

import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import imagemLogo from "../../public/images/logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarFormulario = () => {
    return validarEmail(email) && validarSenha(senha);
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
        <form>
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
          <Button text="Login" type="submit" desabilitado={!validarFormulario()} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora!</Link>
        </div>
      </div>
    </section>
  );
}
