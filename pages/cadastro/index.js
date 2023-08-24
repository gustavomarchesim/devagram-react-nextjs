import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../../components/button";
import InputPublico from "../../components/inputPublico";
import UploadImagem from "../../components/upload";

import imagemLogo from "../../public/images/logo.svg";
import imagemEnvelope from "../../public/images/envelope.svg";
import imagemChave from "../../public/images/chave.svg";
import imagemUsuario from "../../public/images/usuario.svg";
import imagemAvatar from "../../public/images/avatar.svg";
import imagemCamera from "../../public/images/camera.svg";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmacaoSenha] = useState("");
  const [imagem, setImagem] = useState(null);
  return (
    <section className={`paginaCadastro paginaPublica`}>
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
          <div className="avatarContainer">
            <UploadImagem
              imagemPreviewClassName="avatar avatarPreview"
              imagemPreview={imagem?.preview || imagemAvatar.src}
              setImagem={setImagem}
            />
          </div>
          <InputPublico
            imagem={imagemUsuario}
            tipo="text"
            placeholder="Nome completo"
            valor={nome}
            aoAlterarValor={(e) => setNome(e.target.value)}
          />
          <InputPublico
            imagem={imagemEnvelope}
            tipo="email"
            placeholder="E-mail"
            valor={email}
            aoAlterarValor={(e) => setEmail(e.target.value)}
          />
          <InputPublico
            imagem={imagemChave}
            tipo="password"
            placeholder="Senha"
            valor={senha}
            aoAlterarValor={(e) => setSenha(e.target.value)}
          />
          <InputPublico
            imagem={imagemChave}
            tipo="password"
            placeholder="Confirmar Senha"
            valor={confirmaSenha}
            aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
          />
          <Button text="Cadastro" type="submit" disabled={false} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/">Faça seu login agora!</Link>
        </div>
      </div>
    </section>
  );
}