import Image from "next/image";

import Navbar from "./navbar";

import logoHorizontal from "../../public/images/logo2.svg";
import imagemLupa from "../../public/images/lupa.svg";

export default function Header() {
  return (
    <header className="headerPrincipal">
      <div className="conteudoHeaderPrincipal">
        <div className="logoHeaderPrincipal">
          <Image src={logoHorizontal} alt="Logo Devagram" layout="fill"/>
        </div>
        <div className="barraPesquisa">
          <div className="containerImagemLupa">
            <Image src={imagemLupa} alt="icone lupa" layout="fill"/>
          </div>
          <input
            type="text"
            placeholder="Pesquisar"
            value=""
            onChange={() => console.log("Digitando")}
          />
        </div>
        <Navbar className="desktop" />
      </div>
    </header>
  );
}
