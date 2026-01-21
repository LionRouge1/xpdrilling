import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import FleetPage from "./pages/FleetPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./components/NotFound";
import HseqPage from "./pages/HseqPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import TeamPage from "./pages/TeamPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="fleet" element={<FleetPage />} />
        <Route path="our-team" element={<TeamPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="hseq" element={<HseqPage />} />
        <Route path="sustainability" element={<SustainabilityPage />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App
