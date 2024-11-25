import { useEffect, useRef } from "react";
import { PageOptionProps } from "../../types";
import { MdOutlineCheckBox } from "react-icons/md";

const PageOption = ({ title, image, description, lists }: PageOptionProps) => {
  const elementRef = useRef<HTMLElement>(null);

  const serialized = (text: string) => (
    text.trim().replace(/\s/g, '-').toLowerCase()
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      root: document,
      rootMargin: '-100px',
      threshold: 0
    });
    observer.observe(elementRef.current!);
    return () => observer.disconnect();
  }, []);

  return (
  <article
    ref={elementRef}
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
      <div className="contact-btn">
        <a href="#" className="btn"></a>
      </div>
    </div>
    <div className="page-option-image" style={{ backgroundImage: `url(${image})` }}>
    </div>
  </article>
)};

export default PageOption;