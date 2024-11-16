import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import WhyChooseUs from "../components/WhyChooseUs";
import OurMission from "../components/OurMission";
import CoreValues from "../components/CoreValues";

const AboutUsPage = () => (
  <>
    <PageBanner title="About Us" image={BannerImg} />
    <main>
      <WhyChooseUs />
      <OurMission />
      <CoreValues />
    </main>
  </>
);

export default AboutUsPage;