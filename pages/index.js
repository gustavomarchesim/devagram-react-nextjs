import { useRef, useState } from "react";

import Avatar from "../components/avatar";
import Button from "../components/button";
import { UploadImagem } from "../components/upload";

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const refInput = useRef(null); 

  return (
    <>
      <h1>Olá, mundo</h1>
      <button onClick={()=> refInput?.current.click()}>Abrir seletor de Arquivos</button>
      <div style={{ width: 200 }}>
        <Avatar />
        <UploadImagem 
          setImagem={setImagem}
          imagemPreview={imagem?.preview}
          aoSetarReferencia={(ref) => refInput?.current = ref} 
        />
      </div>
      <Button 
        text={"Login"} 
        onClick={() => console.log("Botão clicado!")} 
      />
    </>
  );
}
