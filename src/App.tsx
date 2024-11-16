import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import NotFound from "./components/NotFound";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="fleet" element={<FleetPage />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
  // <>
  //   <Header />
  //   <Menu />
  //   <Home />
  //   <main>
  //     <Qualities />
  //     <OurOffers />
  //     <OurServices />
  //     <WeHave />
  //     <GetInTouch />
  //   </main>
  //   <Footer />
  // </>
);

export default App
