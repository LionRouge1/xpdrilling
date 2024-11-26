import { ContentPageProps } from "../types";
import PageOption from "../components/about/PageOption";
import { RiArrowRightSFill } from "react-icons/ri";
import CallForAction from "../components/about/CallForAction";
import '../styles/contentforpage.scss';
import { useEffect } from "react";

const ContentForPage = ({
  postBanner,
  pageOptions,
  page,
  callForAction,
  have
}: ContentPageProps) => {

  const serialized = (text: string) => (
    text.trim().replace(/\s/g, '-').toLowerCase()
  );

  const navList = pageOptions.map((option) => (
    option.title
  ))

  useEffect(() => {
    const anchor = document.location.hash.slice(1);
    console.log(anchor);
    if(anchor) {
      const element = document.getElementById(anchor);
      console.log(element);
      element?.scrollIntoView()
    }
  }, []);

  return (
    <>
      <section className={have.horizontalBar? 'horizontal-banner' : 'vertical-banner'}>
        {
          have.horizontalBar? (
            <div className='horizontal-banner-image' style={{ backgroundImage: `url(${postBanner.image})` }}></div>
          ) : null
        }
        <div className={have.horizontalBar? 'horizontal-banner-content' : 'vertical-banner-content'}>
          {/* <h2>{postBanner.title}</h2> */}
          {
            postBanner.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))
          }
        </div>
      </section>

      <section className={`${have.horizontalBar? 'page-content-horizontal' : 'page-content-vertical'} ${have.sideBar || 'no-side-bar'}`}>
        <section className={have.horizontalBar? 'page-options': 'vertical-options'}>
          {pageOptions.map((pageOpation, index) => (
            <PageOption key={index} {...pageOpation} />
          ))}
        </section>
        {
          have.sideBar? (
            <section className="side-bar">
              <article className="side-bar-navigation">
                <h3>{page.title}</h3>
                <ul>
                  {
                    navList.map((nav, index) => (
                      <li key={index}>
                        <a href={`${page.url}#${serialized(nav)}`}>
                          {nav}
                          <RiArrowRightSFill />
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </article>
            </section>
          ) : null
        }
      </section>
      {
        callForAction ? (
          <CallForAction
            title={callForAction.title}
            description={callForAction.description}
            butonText='Contact Us'
            image={callForAction.image}
          />
        ) : null
      }
    </>
  );
};

export default ContentForPage;