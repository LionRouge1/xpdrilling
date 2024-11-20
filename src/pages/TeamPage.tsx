import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import OurTeam from "../components/about/OurTeam";
import '../styles/teampage.scss';

const TeamPage = () => (
  <>
    <PageBanner
      title="Our Team Member"
      sousTitle="Meet the team"
      image={BannerImg}
    />
    <main>
      <OurTeam />
    </main>
  </>
);

export default TeamPage;