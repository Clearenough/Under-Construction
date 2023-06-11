import Layout from './components/Layout/Layot';
import Brand from './components/Brand/Brand';
import Curtains from './components/Curtains/Curtains';
import Motto from './components/Motto/Motto';
import Countdown from './components/Countdown/Countdown';
import EventsButton from './components/EventsButton/EventsButton';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <div>
        <Curtains />
        <Brand />
        <Motto />
        <Countdown />
        <EventsButton />
      </div>
      <Footer />
    </Layout>
  );
}

export default App;
