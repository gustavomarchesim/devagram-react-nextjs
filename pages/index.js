import Avatar from "../components/avatar";
import Button from "../components/button";
import {UploadImagem} from '../components/upload';

export default function Home() {
  return (
    <>
      <h1>Olá, mundo</h1>
      <UploadImagem />
      <div style={{width: 200}}>
        <Avatar />
        <Button 
          text={"Login"} 
          onClick={() => console.log("Botão clicado!")} />
      </div>
    </>
  );
}
