import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about-us-banner-image.webp';
import WhyChooseUs from "../components/WhyChooseUs";
import OurMission from "../components/OurMission";
import CoreValues from "../components/CoreValues";
import OurImpact from "../components/about/OurImpact";

const AboutUsPage = () => (
  <>
    <PageBanner
      title="About Us"
      image={BannerImg} 
      sousTitle="Innovative Solutions, Trusted Expertise"
    />
    <main style={{backgroundColor: 'white'}}>
      <WhyChooseUs />
      <OurMission />
      <CoreValues />
      <OurImpact />
    </main>
  </>
);

export default AboutUsPage;