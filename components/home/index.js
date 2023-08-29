import comAutorizacao from "../../hoc/comAutorizacao";

function Home() {
  return (
    <div className="conteudoPaginaInicial">
      <h1>Olá, mundo!</h1>
    </div>
  );
}

export default comAutorizacao(Home);
