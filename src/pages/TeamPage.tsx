import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import OurTeam from "../components/about/OurTeam";
import OurImpact from "../components/about/OurImpact";
import '../styles/teampage.scss';

const TeamPage = () => (
  <>
    <PageBanner title="Our Team Member" image={BannerImg} />
    <main>
      <OurTeam />
      <OurImpact />
    </main>
  </>
);

export default TeamPage;