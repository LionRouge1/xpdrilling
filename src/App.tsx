import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import OurOffers from './components/OurOffers';
import Qualities from './components/Qualities';

const App = () => (
  <>
    <Header />
    <Menu />
    <Home />
    <main>
      <Qualities />
      <OurOffers />
    </main>
    <Footer />
  </>
);

export default App
