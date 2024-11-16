import { GiTeamIdea } from "react-icons/gi";
import { GiClassicalKnowledge, GiSpinningTop } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { RiFocus3Fill } from "react-icons/ri";
import '../styles/corevalues.scss';

const valuesobj = [
  {
    id: 1,
    title: 'Safety and Responsibility',
    image: GiClassicalKnowledge,
    text: 'We are unwavering in our dedication to protecting the well-being of our team, clients, and the environments in which we work. Responsible exploration is not just a commitment but a way of life.',
  },
  {
    id: 2,
    title: 'Integrity',
    image: MdHealthAndSafety,
    text: 'We operate transparently, with honesty and ethics at the forefront of our decision-making. Trust is paramount in our relationships with clients, partners, and communities.',
  },
  {
    id: 3,
    title: 'ESG',
    image: GiSpinningTop,
    text: 'We are committed to ESG excellence, integrating Environmental responsibility, Social engagement, and Governance transparency into our core identity, ensuring a sustainable future.',
  },
  {
    id: 4,
    title: 'Excellence and Innovation',
    image: RiFocus3Fill,
    text: 'We pursue excellence in everything we do and continuously seek new ways to improve our drilling techniques, adopt advanced technology, and contribute to the industry\'s evolution.',
  },
  {
    id: 5,
    title: 'Team Empowerment',
    image: GiTeamIdea,
    text: 'We empower our team members with the knowledge, skills, and opportunities to excel. Our success is a result of their dedication, professionalism, and unwavering commitment.',
  }
];

const CoreValues = () => (
  <section className="core-values">
    <h4>OUR CORE VALUES</h4>
    <ul className="values">
      <div className="start square"></div>
      {
        valuesobj.map((value) => (
          <li key={value.id} className="value">
            <div className="value-text">
            <span><value.image /></span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
            </div>
            <span className="value-label">
              {`00${value.id}`}
            </span>
          </li>
        ))
      }
      <div className="end square"></div>
    </ul>
  </section>
);

export default CoreValues;