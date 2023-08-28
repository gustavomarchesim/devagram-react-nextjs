import comAutorizacao from "../../hoc/comAutorizacao";

function Home() {
    return(
        <h1>Olá, mundo!</h1>
    );
}

export default comAutorizacao(Home);