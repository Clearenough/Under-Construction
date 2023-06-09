import Layout from './components/Layout/Layot';
import Brand from './components/Brand/Brand';
import Curtains from './components/Curtains/Curtains';
import Motto from './components/Motto/Motto';

function App() {
  return (
    <Layout>
      <Curtains />
      <Brand />
      <Motto />
    </Layout>
  );
}

export default App;
