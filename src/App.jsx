import Layout from './components/Layout/Layot';
import Brand from './components/Brand/Brand';
import Curtains from './components/Curtains/Curtains';
import Motto from './components/Motto/Motto';
import Countdown from './components/Countdown/Countdown';

function App() {
  return (
    <Layout>
      <Curtains />
      <Brand />
      <Motto />
      <Countdown />
    </Layout>
  );
}

export default App;
