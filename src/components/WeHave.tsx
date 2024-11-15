import { GiClassicalKnowledge, GiSpinningTop } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { RiFocus3Fill } from "react-icons/ri";
import '../styles/wehave.scss';

const reasonsobj = [
  {
    id: 1,
    title: 'Expertise',
    image: GiClassicalKnowledge,
    text: 'Our team consists of highly skilled professionals with years of experience in the drilling industry.',
  },
  {
    id: 2,
    title: 'Safety',
    image: MdHealthAndSafety,
    text: 'We prioritize the safety of our employees, clients, and the environment in all our operations.',
  },
  {
    id: 3,
    title: 'Innovation',
    image: GiSpinningTop,
    text: 'We continuously invest in new technologies and techniques to deliver the best results for our clients.',
  },
  {
    id: 4,
    title: 'Customer Focus',
    image: RiFocus3Fill,
    text: 'Your satisfaction is our top priority, and we work closely with you to tailor our services to meet your specific needs.',
  }
];

const WeHave = () => (
  <section className="we-have">
    <h4>WHAT WE HAVE</h4>
    <h2 className="we-have-title">Why Choose XP Drilling Services?</h2>
    <ul className="reasons">
      {
        reasonsobj.map((reason) => (
          <li key={reason.id} className="reason">
            <span><reason.image /></span>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </li>
        ))
      }
    </ul>
  </section>
);

export default WeHave;