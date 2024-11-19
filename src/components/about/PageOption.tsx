import { PageOptionProps } from "../../types";
import { MdOutlineCheckBox } from "react-icons/md";

const PageOption = ({ title, image, description, lists }: PageOptionProps) => (
  <article className="page-option">
    <div className="page-option-content">
      <h2>{title}</h2>
      {
        description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))
      }
      <ul className="page-option-list">
        {
          lists.map((list, index) => (
            <li key={index}><MdOutlineCheckBox /> {list}</li>
          ))
        }
      </ul>
    </div>
    <div className="page-option-image" style={{ backgroundImage: `url(${image})` }}>
    </div>
  </article>
);

export default PageOption;