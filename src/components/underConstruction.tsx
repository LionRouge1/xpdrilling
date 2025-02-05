import { Link } from "react-router-dom";
import '../styles/underconstruction.scss';

const UnderConstruction = () => {
  return (
    <section className="under-construction">
      <div className="under-constuction-text">
        <p className="text">Page Is Under Construction</p>
        <p className="text">Please check back later</p>
        <Link to="/" className="btn">Go Back</Link>
      </div>
    </section>
  )
};

export default UnderConstruction;