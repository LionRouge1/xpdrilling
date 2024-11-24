import Home from "../components/Home";
import Qualities from "../components/Qualities";
import OurOffers from "../components/OurOffers";
import OurServices from "../components/OurServices";
import WeHave from "../components/WeHave";
import GetInTouch from "../components/GetInTouch";
import { GiClassicalKnowledge, GiSpinningTop } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { RiFocus3Fill } from "react-icons/ri";
import wordMap from '../assets/world-map.png';

const content = {
  title: 'WHAT WE HAVE',
  sousTitle: 'Why Choose XP Drilling Services?',
  description: [],
  image: wordMap,
  reasons: [
    {
      title: 'Expertise',
      image: GiClassicalKnowledge,
      text: 'Our team consists of highly skilled professionals with years of experience in the drilling industry.',
    },
    {
      title: 'Safety',
      image: MdHealthAndSafety,
      text: 'We prioritize the safety of our employees, clients, and the environment in all our operations.',
    },
    {
      title: 'Innovation',
      image: GiSpinningTop,
      text: 'We continuously invest in new technologies and techniques to deliver the best results for our clients.',
    },
    {
      title: 'Customer Focus',
      image: RiFocus3Fill,
      text: 'Your satisfaction is our top priority, and we work closely with you to tailor our services to meet your specific needs.',
    }
  ]
};

const HomePage = () => {
  return (
  <>
    <Home />
    <main>
      <Qualities />
      <OurOffers />
      <OurServices />
      <WeHave content={content}/>
      <GetInTouch />
    </main>
  </>
)};

export default HomePage;