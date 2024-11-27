import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/hseq-banner-image.webp';
import localCommunity from '../assets/local-community.webp';
import joinUs from '../assets/vision.jpg';
import callForActionImage from '../assets/hseq-call-for-action.webp';
import HSEQ from "../components/Hseq";
import CallForAction from "../components/about/CallForAction";

const HseqPage = () => {
  const postBanner = {
    title: 'Our Commitment to HSEQ Excellence',
    image: joinUs,
    description: ["At XP Drilling Services, our top priority is the well-being of our employees, clients, communities, and the environment. We are committed to upholding the highest standards in Health, Safety, Environment, and Quality (HSEQ) throughout all of our drilling operations."]
  };

  const pageOptions = [
    {
      title: 'Health & Safety',
      description: ['The safety of our workforce and stakeholders is our top priority. We believe that all accidents are preventable and strive to create a zero-harm working environment.'],
      image: '',
      lists: [
        ["Risk Assessment:", "We conduct thorough risk assessments and implement proactive strategies to minimize hazards, ensuring safety for our team and community."],
        ["Continuous Training:", "We provide regular safety training, ensuring our team stays updated on industry practices and is prepared for project challenges."],
        ["Strict Compliance:", "We adhere to both local and international health and safety regulations, ensuring that our operations meet or exceed industry requirements."]
      ]
    },
    {
      title: 'Environmental Responsibility',
      description: ['As part of our commitment to sustainable practices, we take proactive measures to minimize our environmental impact in every project.'],
      image: joinUs,
      lists: [
        ["Sustainable Drilling Practices:", "We employ environmentally conscious drilling methods that reduce waste, minimize water consumption, and mitigate environmental disturbance."],
        ["Regulatory Compliance:", "XP Drilling Services complies with all relevant environmental regulations and best practices, ensuring that we protect the ecosystems in which we operate."],
        ["Environmental Stewardship:", "We are dedicated to restoring and preserving the natural environments surrounding our drilling sites. Through careful planning and execution, we minimize our ecological footprint and promote sustainability."]
      ]
    },
    {
      title: 'Quality Assurance',
      description: ['Our commitment to quality is at the heart of every project we undertake. We consistently strive for operational excellence and deliver results that meet or exceed our clients’ expectations.'],
      image: '',
      lists: [
        ["Quality Control:", "We enforce stringent quality control measures through equipment maintenance, operational checks, and process monitoring to ensure precision and accuracy in our operations."],
        ["Client Satisfaction:", "We prioritize exceptional service by understanding client needs, providing tailored solutions, and ensuring each project meets the highest standards of quality and satisfaction."]
      ]
    },
    {
      title: 'Community Engagement',
      description: ['XP Drilling Services believes in the importance of building strong relationships with the communities where we operate. We actively engage with local stakeholders, ensuring that they are well-informed about our activities and that their concerns are addressed.'],
      image: localCommunity,
      lists: [
        ["Empowering Local Workforce:", "Through our training and development programs, we aim to uplift and empower the local workforce by creating job opportunities and transferring valuable skills to local populations."]
      ]
    },
    {
      title: 'HSEQ Reporting',
      description: ['Transparency is key to building trust and ensuring accountability. We maintain detailed records of our HSEQ performance and provide regular reports to clients and relevant authorities.'],
      image: '',
      lists: [
        ["Performance Monitoring:", "We track our HSEQ metrics in real-time, ensuring that any issues are swiftly identified and addressed."],
        ["Client Communication:", "We keep our clients informed of HSEQ performance throughout the project lifecycle, providing detailed reports and updates as needed."]
      ]
    }
  ];

  const callForaction = {
    title: 'Our Commitment to Continuous Improvement',
    description: ["At XP Drilling Services, we are committed to continuously improving our HSEQ practices. By fostering a culture of excellence and accountability, we ensure that every project is completed with the highest regard for safety, environmental stewardship, and quality.",
      "If you would like to learn more about our HSEQ framework or how we can help meet your specific project requirements, please don’t hesitate to get in touch."
    ],
    image: callForActionImage,
    butonText: 'Contact Us'
  }
  return (
    <>
      <PageBanner
        title="HSEQ"
        sousTitle="Health, Safety, Environment, and Quality"
        image={BannerImg}
      />
      <main className="hseq-page">
        <section className='vertical-banner'>
          <div className='vertical-banner-content'>
            {
              postBanner.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))
            }
          </div>
        </section>

        {
          pageOptions.map(({ title, description, lists, image }) => (
            <HSEQ
              title={title}
              description={description}
              lists={lists}
              image={image}
            />
          ))
        }

        <CallForAction
          title={callForaction.title}
          description={callForaction.description}
          butonText='Contact Us'
          image={callForaction.image}
        />
      </main>
    </>
  );
}

export default HseqPage;