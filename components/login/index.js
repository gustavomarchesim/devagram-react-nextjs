import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";
import InputPublico from "../inputPublico";

import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import imagemLogo from "../../public/images/logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <section className={`paginaLogin paginaPublica`}>
      <div className="logoContainer">
        <Image src={imagemLogo} alt="Logo Devaria" layout="fill" className="logo" />
      </div>

      <div className="paginaPublicaConteudo">
        <form>
          <InputPublico
            imagem={imagemEnvelope}
            placeholder="E-mail"
            valor={email}
            tipo="email"
            aoAlterarValor={(e) => setEmail(e.target.value)}
          />
          <InputPublico
            imagem={imagemChave}
            placeholder="Senha"
            valor={senha}
            tipo="password"
            aoAlterarValor={(e) => setSenha(e.target.value)}
          />
          <Button text="Login" type="submit" disabled={false} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/cadastro">Faça seu cadastro agora!</Link>
        </div>
      </div>
    </section>
  );
}
