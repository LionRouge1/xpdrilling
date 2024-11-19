import { ContentPageProps } from "../types";
import PageOption from "../components/about/PageOption";
import { FaPhoneVolume } from 'react-icons/fa';
import { FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import { RiArrowRightSFill } from "react-icons/ri";
import CallForAction from "../components/about/CallForAction";
import '../styles/contentforpage.scss';

const ContentForPage = ({
  postBanner,
  pageOptions,
  pageUrl,
  callForAction
}: ContentPageProps) => {

  const serialized = (text: string) => (
    text.trim().replace(/\s/g, '-')
  );

  const navList = pageOptions.map((option) => (
    option.title
  ))
  return (
    <main>
      <section className="post-banner">
        <div className="post-banner-image" style={{ backgroundImage: `url(${postBanner.image})` }}></div>
        <div className="post-banner-content">
          <h2>{postBanner.title}</h2>
          {
            postBanner.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))
          }
        </div>
        <div className="cover"></div>
      </section>

      <section className="page-content">
        <section className="page-options">
          {pageOptions.map((pageOpation, index) => (
            <PageOption key={index} {...pageOpation} />
          ))}
        </section>
        <section className="side-bar">
          <article className="side-bar-navigation">
            <ul>
              {
                navList.map((nav, index) => (
                  <li key={index}>
                    <a href={`${pageUrl}#${serialized(nav)}`}>
                      {nav}
                      <RiArrowRightSFill />
                    </a>
                  </li>
                ))
              }
            </ul>
          </article>
          <article className="contact-us-box">
            <h3>For an Inquiry</h3>
            <img src="https://via.placeholder.com/150" alt="contact us" />
            <h3>XP Drilling</h3>
            <ul className="contact-info">
              <li><FaLocationDot /> Los Angels Gournadi, 1230 Bariasl</li>
              <li><a href="mailto:"><FaEnvelope />  info@xpdrilling.com</a></li>
              <li><a href="tel:+233263119815"><FaPhoneVolume /> +233 (0) 26 311 9815</a></li>
            </ul>
            <a href="#" className="btn">Contact Us</a>
          </article>
        </section>
      </section>
      {
        callForAction? (
        <CallForAction
          title={callForAction.title}
          description={callForAction.description}
          butonText='Contact Us'
          image={callForAction.image}
        />
        ) : null
      }
    </main>
  );
};

export default ContentForPage;