import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import sustain1 from '../assets/subility-01.jpg'
import sustain2 from '../assets/subility-02.jpg'
import sustain3 from '../assets/subility-03.jpg'
import sustain4 from '../assets/subility-04.jpg'
import getInTouch from '../assets/get-in-touch.jpg'
import ContentForPage from "./ContentForPage";

const SustainabilityPage = () => { 
  const postBanner = {
    title: 'Precision Drilling Solutions Tailored to Your Needs',
    image: sustain1,
    description: ["At XP Drilling Services, we recognize that our responsibilities extend beyond drilling holes and delivering results. We are deeply committed to the principles of Environmental, Social, and Governance (ESG), which guide our actions and decisions in a way that positively impacts not only our stakeholders but also the planet and the communities in which we operate."],
  };

  const pageOptions = [
    {
      title: 'Environmental Responsibility',
      description: [
        "XP Drilling Services is dedicated to minimizing our environmental footprint. We employ eco-friendly drilling practices, implement strict environmental controls, and adhere to all relevant regulations. Our aim is to protect the natural ecosystems, minimize resource consumption, and reduce waste generation."
      ],
      image: sustain2,
      lists: [
        "Sustainable Drilling Practices",
        "Energy Efficiency",
        "Land Restoration & Conservation",
        "Regulatory Compliance"
      ]
    },
    {
      title: 'Social Engagement',
      description: [
        "We believe in contributing positively to the communities in which we work. Our social initiatives are designed to uplift local communities by creating jobs, supporting local businesses, and investing in education and skill development. We respect local cultures, traditions, and values."
      ],
      image: sustain3,
      lists: [
        "Local Employment & Skills Development",
        "Community Engagement",
        "Health & Safety Commitment"
      ]
    },
    {
      title: 'Governance Excellence',
      description: [
        "XP Drilling Services operates with the highest standards of governance and ethics. Our governance practices prioritize transparency, accountability, and compliance with all relevant laws and regulations. We have robust systems in place to ensure responsible decision-making at all levels of our organization."
      ],
      image: sustain4,
      lists: [
        "Transparency & Reporting",
        "Ethical Business Practices",
        "Corporate Governance",
        "Compliance"
      ]
    }
  ];

  const callForAction = {
    title: 'Ready to explore our services?',
    description: ["At XP Drilling Services, ESG is not just an initiative—it's integral to how we conduct our business. By prioritizing environmental stewardship, social responsibility, and governance excellence, we aim to create a positive impact for our stakeholders and the planet.",
      "We are dedicated to continuous improvement in our ESG practices and welcome feedback from our clients, communities, and partners to help us achieve our shared sustainability goals."
    ],
    image: getInTouch,
    butonText: 'Contact Us'
  }
  return (
  <>
    <PageBanner title="Sustainability" image={BannerImg} />
    <ContentForPage
      postBanner={postBanner}
      pageOptions={pageOptions}
      pageUrl='/sustainability'
      callForAction={callForAction}
    />
  </>
)};

export default SustainabilityPage;