import { useEffect, useRef } from "react";
import { BannerProps } from "../types";
import '../styles/pagebanner.scss';

const PageBanner = ({ title, sousTitle, image }: BannerProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const imageStyle = {
    backgroundSize: 'cover'
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.querySelector('img')!;
          image.style.animation = 'zoom 30s forwards';
        } else {
          const image = entry.target.querySelector('img')!;
          image.style.animation = 'none';
        }
      });
    }, {
      root: document,
      rootMargin: '0px',
      threshold: 0
    });
    observer.observe(elementRef.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={elementRef}
      className="page-banner"
      style={imageStyle}
    >
      <img src={image} alt="title" />
      <h1>{title}</h1>
      <p>{sousTitle}</p>
    </section>
  );
};

export default PageBanner;