import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import actionImage from '../assets/service-02.jpg';
import service1 from '../assets/service-01.webp'
import service2 from '../assets/service-02.webp'
import service3 from '../assets/service-03.webp'
import exploration from '../assets/core-exploration.png';
import orientation from '../assets/orientation.png';
import survey from '../assets/survey.png';
import rcExploration from '../assets/rc-exploration.png'
import rcGradeControl from '../assets/grade-control.png';
import directionalDrilling from '../assets/directional-drilling.png';
import WeHave from "../components/WeHave";
import { WehaveProps } from "../types";
import CallForAction from "../components/about/CallForAction";
import '../styles/servicespage.scss';
import { useEffect } from "react";

const contents = [
  {
    title: '',
    sousTitle: 'Diamond Drilling Services',
    description: ['Diamond Drilling (DD) is the go-to method for accurate core sampling in mineral exploration. XP Drilling Services offers a full suite of drilling solutions designed for deep exploration and precise sample recovery.', ' Our Diamond Drilling Capabilities:'],
    image: '',
    reasons: [
      {
        title: 'Core Exploration',
        image: exploration,
        text: 'Our Diamond Drilling services are tailored for core exploration, offering detailed insights into geological structures and ore bodies.',
      },
      {
        title: 'Core Orientation (PQ, HQ, NQ)',
        image: orientation,
        text: 'We provide core orientation to ensure high-quality, directional data for your project, available in a range of core sizes (PQ, HQ, NQ).',
      },
      {
        title: 'Down-Hole Surveys',
        image: survey,
        text: 'Utilizing advanced down-hole survey techniques, including camera surveys and gyro tools, we deliver accurate positioning and data collection from deep underground.',
      },
      {
        title: 'Directional Drilling',
        image: directionalDrilling,
        text: 'We offer advanced directional drilling solutions using wedge and Navi motor directional tools. This allows us to follow complex ore body structures with precision.',
      }
    ]
  },
  {
    title: '',
    sousTitle: 'Reverse Circulation Drilling',
    description: ['Reverse Circulation (RC) Drilling is our forte when it comes to efficiently collecting representative samples from a variety of geological formations. This method offers rapid drilling progress and sample recovery. Our RC Drilling services are particularly well-suited for bulk sampling and assessment, making it an economical choice for resource evaluation.', 'Our RC Drilling Services Include:'],
    image: '',
    reasons: [
      {
        title: 'RC Exploration Drilling',
        image: rcExploration,
        text: 'Ideal for collecting geological data during early-stage exploration. Our RC rigs are equipped to handle challenging terrains while delivering high-quality samples quickly.',
      },
      {
        title: 'RC Grade Control Drilling',
        image: rcGradeControl,
        text: 'Our RC grade control drilling ensures precise sample collection for accurate mine planning and ore-grade estimation, helping you optimize resource extraction.',
      },
      {
        title: 'Down-Hole Surveys',
        image: survey,
        text: 'We use stainless steel rods or advanced gyro tools for down-hole surveys, ensuring accurate measurement of borehole paths and mineral locations.',
      }
    ]
  }
] as WehaveProps[];

const Services = () => {
  const postBanner = {
    title: '',
    image: '',
    description: ["At XP Drilling Services, we provide comprehensive exploration and grade control drilling solutions for the mining industry.", " Each service is supported by state-of-the-art technology, strict safety protocols, and a commitment to environmental sustainability.", "Explore our specialized services below to learn more about our capabilities and how we can assist with your project."],
  };

  const callForAction = {
    title: 'Ready to explore our services?',
    description: ["At XP Drilling Services, we are committed to delivering reliable, efficient, and high-quality drilling solutions tailored to meet the unique needs of your project. Our experienced team, cutting-edge technology, and dedication to safety and sustainability ensure that we not only meet but exceed industry standards. Whether you require precision Diamond Drilling, Reverse Circulation, or custom drilling solutions, XP Drilling Services is your trusted partner in driving success. Let us help you unlock your project’s full potential with expertise you can depend on."],
    image: actionImage,
    butonText: 'Contact Us'
  }

  // console.log(document.location.pathname, document.location.hash)
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
      <PageBanner
        title="Our Services"
        sousTitle="Precision Drilling Solutions Tailored to Your Needs"
        image={BannerImg}
      />
      <main className="services-page">
        <section className="post-banner">
          {
            postBanner.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))
          }
        </section>
        <section className="services-images">
          {
            [service1, service2, service3].map((service, index) => (
              <img src={service}  key={index} alt="Service image" />
            ))
          }
        </section>
        {
          contents.map((content, index) => <WeHave key={index} content={content} />)
        }
        <CallForAction
          title={callForAction.title}
          description={callForAction.description}
          butonText='Contact Us'
          image={callForAction.image}
        />
      </main>
    </>
  )
};

export default Services;