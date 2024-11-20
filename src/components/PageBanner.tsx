import { BannerProps } from "../types";
import '../styles/pagebanner.scss';

const PageBanner = ({title, sousTitle, image}: BannerProps) => {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <section className="page-banner" style={imageStyle}>
      <h1>{title}</h1>
      <p>{sousTitle}</p>
    </section>
  );
};

export default PageBanner;