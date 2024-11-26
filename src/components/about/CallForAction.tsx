import { FC } from "react";
import { CallForActionProps } from "../../types";
import '../../styles/callforaction.scss';

const CallForAction: FC<CallForActionProps> = ({ title, description, image, butonText }) => {
  return (
    <section className="call-for-action" style={{ backgroundImage: `url(${image})` }}>
      <h4>{title}</h4>
      {
        description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))
      }
      <a href="/contact-us" className="btn">{butonText}</a>
    </section>
  )
};

export default CallForAction;