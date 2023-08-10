import Avatar from "@/components/avatar";
import Button from "@/components/button";
export default function Home() {
  return (
    <>
      <h1>Olá, mundo</h1>
      <Avatar/>
      <Button
        text={"Login"}
        onClick={() => console.log("Botão clicado!")}
      ></Button>
    </>
  );
}
