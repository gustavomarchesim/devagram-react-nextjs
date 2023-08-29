import Image from "next/image";
import imagemHome from "../../public/images/home.svg";
import imagemHomeFill from "../../public/images/home_fill.svg";
import imagemAdicionar from "../../public/images/plus_square.svg";
import imagemAdicionarFill from "../../public/images/plus_square_fill.svg";
import imagemUsuario from "../../public/images/usuario.svg";
import imagemUsuarioFill from "../../public/images/usuario_fill.svg";

export default function Navbar({ className }) {
  return (
    <nav className={`barraNavegacaoPrincipal ${className}`}>
      <ul>
        <li>
          <Image src={imagemHomeFill} alt="Logo Home" width={24} height={24} />
        </li>
        <li>
          <Image src={imagemAdicionar} alt="Logo Adicionar" width={24} height={24} />
        </li>
        <li>
          <Image src={imagemUsuario} alt="Logo Usuário" width={24} height={24} />
        </li>
      </ul>
    </nav>
  );
}
