import { PageOptionProps } from "../../types";
import { MdOutlineCheckBox } from "react-icons/md";

const PageOption = ({ title, image, description, lists }: PageOptionProps) => {
  const serialized = (text: string) => (
    text.trim().replace(/\s/g, '-').toLowerCase()
  );

  return (
  <article
    className="page-option"
    id={serialized(title)}
  >
    <div className="page-option-content">
      <h3>{title}</h3>
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
)};

export default PageOption;