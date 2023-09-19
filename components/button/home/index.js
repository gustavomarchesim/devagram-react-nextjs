import Feed from '../../feed';
import comAutorizacao from '../../../hoc/comAutorizacao';

function Home({ infoUsarioLogado }) {
  return <Feed />;
}

export default comAutorizacao(Home);
