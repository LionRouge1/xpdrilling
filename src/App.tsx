import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import OurOffers from './components/OurOffers';
import OurServices from './components/OurServices';
import Qualities from './components/Qualities';
import WeHave from './components/WeHave';

const App = () => (
  <>
    <Header />
    <Menu />
    <Home />
    <main>
      <Qualities />
      <OurOffers />
      <OurServices />
      <WeHave />
      <GetInTouch />
    </main>
    <Footer />
  </>
);

export default App
