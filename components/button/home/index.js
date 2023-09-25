import Feed from '../../feed';
import comAutorizacao from '../../../hoc/comAutorizacao';

function Home({ usuarioLogado }) {
  return <Feed />;
}
export default comAutorizacao(Home);
