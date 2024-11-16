import Home from "../components/Home";
import Qualities from "../components/Qualities";
import OurOffers from "../components/OurOffers";
import OurServices from "../components/OurServices";
import WeHave from "../components/WeHave";
import GetInTouch from "../components/GetInTouch";

const HomePage = () => (
  <>
    <Home />
    <main>
      <Qualities />
      <OurOffers />
      <OurServices />
      <WeHave />
      <GetInTouch />
    </main>
  </>
);

export default HomePage;