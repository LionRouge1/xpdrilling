import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import ContentForPage from "./ContentForPage";
import hseq1 from '../assets/heq.jpg';
import hseq2 from '../assets/hseq-01.jpg';
import joinUs from '../assets/join-us.jpg';

const HseqPage = () => {
  const postBanner = {
    title: 'Our Commitment to HSEQ Excellence',
    image: '',
    description: ["At XP Drilling Services, our top priority is the well-being of our employees, clients, communities, and the environment. We are committed to upholding the highest standards in Health, Safety, Environment, and Quality (HSEQ) throughout all of our drilling operations."]
  };

  const pageOptions = [
    {
      title: 'Health & Safety',
      description: ['The safety of our workforce and stakeholders is our top priority. We believe that all accidents are preventable and strive to create a zero-harm working environment.'],
      image: joinUs,
      lists: [
        "Risk Assessment: Every project begins with a comprehensive risk assessment to identify potential hazards. We implement proactive mitigation strategies to minimize risk and ensure the safety of our team and the surrounding community.",
        "Continuous Training: Our team undergoes regular safety training to stay updated on the latest industry practices and regulatory standards. This ensures they are well-equipped to handle the challenges of each project safely.",
        "Strict Compliance: We adhere to both local and international health and safety regulations, ensuring that our operations meet or exceed industry requirements."
      ]
    },
    {
      title: 'Environmental Responsibility',
      description: ['As part of our commitment to sustainable practices, we take proactive measures to minimize our environmental impact in every project.'],
      image: hseq2,
      lists: [
        "Sustainable Drilling Practices: We employ environmentally conscious drilling methods that reduce waste, minimize water consumption, and mitigate environmental disturbance.",
        "Regulatory Compliance: XP Drilling Services complies with all relevant environmental regulations and best practices, ensuring that we protect the ecosystems in which we operate.",
        "Environmental Stewardship: We are dedicated to restoring and preserving the natural environments surrounding our drilling sites. Through careful planning and execution, we minimize our ecological footprint and promote sustainability."
      ]
    },
    {
      title: 'Quality Assurance',
      description: ['Our commitment to quality is at the heart of every project we undertake. We consistently strive for operational excellence and deliver results that meet or exceed our clients’ expectations.'],
      image: hseq1,
      lists: [
        "Quality Control: We have stringent quality control measures in place throughout each phase of drilling to ensure precision and accuracy in all outcomes. This includes regular equipment maintenance, operational checks, and continuous monitoring of our processes.",
        "Client Satisfaction: Delivering exceptional service is central to our business. We work closely with our clients to understand their specific needs and provide tailored solutions that align with their goals, ensuring that each project is completed to the highest standards."
      ]
    },
    {
      title: 'Community Engagement',
      description: ['XP Drilling Services believes in the importance of building strong relationships with the communities where we operate. We actively engage with local stakeholders, ensuring that they are well-informed about our activities and that their concerns are addressed.'],
      image: joinUs,
      lists: [
        "Empowering Local Workforce: Through our training and development programs, we aim to uplift and empower the local workforce by creating job opportunities and transferring valuable skills to local populations."
      ]
    },
    {
      title: 'HSEQ Reporting',
      description: ['Transparency is key to building trust and ensuring accountability. We maintain detailed records of our HSEQ performance and provide regular reports to clients and relevant authorities.'],
      image: hseq2,
      lists: [
        "Performance Monitoring: We track our HSEQ metrics in real-time, ensuring that any issues are swiftly identified and addressed.",
        "Client Communication: We keep our clients informed of HSEQ performance throughout the project lifecycle, providing detailed reports and updates as needed."
      ]
    }
  ];

  const callForaction = {
    title: 'Our Commitment to Continuous Improvement',
    description: ["At XP Drilling Services, we are committed to continuously improving our HSEQ practices. By fostering a culture of excellence and accountability, we ensure that every project is completed with the highest regard for safety, environmental stewardship, and quality.",
      "If you would like to learn more about our HSEQ framework or how we can help meet your specific project requirements, please don’t hesitate to get in touch."
    ],
    image: joinUs,
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
        <ContentForPage
          postBanner={postBanner}
          pageOptions={pageOptions}
          page={{title: 'Our HSEQ', url:'/hseq'}}
          callForAction={callForaction}
          have = {{sideBar: true, horizontalBar: false}}
        />
      </main>
    </>
  );
}

export default HseqPage;