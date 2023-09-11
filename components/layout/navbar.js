import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import imagemHome from "../../public/images/home.svg";
import imagemHomeFill from "../../public/images/home_fill.svg";
import imagemAdicionar from "../../public/images/plus_square.svg";
import imagemAdicionarFill from "../../public/images/plus_square_fill.svg";
import imagemUsuario from "../../public/images/usuario.svg";
import imagemUsuarioFill from "../../public/images/usuario_fill.svg";

export default function Navbar({ className }) {

  const router = useRouter()
  const [activeTab, setActiveTab] = useState(router.pathname);

  useEffect(() => {
    setActiveTab(router.pathname)
  }, [router.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(tab);
  };

  return (
    <nav className={`barraNavegacaoPrincipal ${className}`}>
      <ul>
        <li onClick={() => handleTabClick("/")}>
          <Image
            src={activeTab === "/" ? imagemHomeFill : imagemHome}
            alt="Logo Home"
            width={24}
            height={24}
          />
        </li>
        <li onClick={() => handleTabClick("/publicacao")}>
          <Image
            src={activeTab === "publicacao" ? imagemAdicionarFill : imagemAdicionar}
            alt="Logo publicacao"
            width={24}
            height={24}
          />
        </li>
        <li onClick={() => handleTabClick("/perfil/eu")}>
          <Image
            src={activeTab.startsWith("/perfil") ? imagemUsuarioFill : imagemUsuario}
            alt="Logo Usuário"
            width={24}
            height={24}
          />
        </li>
      </ul>
    </nav>
  );
};
