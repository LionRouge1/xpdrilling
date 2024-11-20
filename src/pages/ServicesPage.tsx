import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import Service from '../assets/service.jpg';
import JoinUs from '../assets/services.webp'
import ContentForPage from "./ContentForPage";
import service1 from '../assets/service-01.jpg'
import service2 from '../assets/service-02.jpg'

const Services = () => {
  const postBanner = {
    title: 'Precision Drilling Solutions Tailored to Your Needs',
    image: Service,
    description: ["At XP Drilling Services, we provide comprehensive exploration and grade control drilling solutions for the mining industry.", " Each service is supported by state-of-the-art technology, strict safety protocols, and a commitment to environmental sustainability.", "Explore our specialized services below to learn more about our capabilities and how we can assist with your project."],
  };

  const pageOpations = [
    {
      title: 'Diamond Drilling Services',
      description: ['Diamond Drilling (DD) is the go-to method for accurate core sampling in mineral exploration. XP Drilling Services offers a full suite of drilling solutions designed for deep exploration and precise sample recovery.', ' Our Diamond Drilling Capabilities:'],
      image: service2,
      lists: [
        "Core Exploration: Our Diamond Drilling services are tailored for core exploration, offering detailed insights into geological structures and ore bodies.",
        "Core Orientation (PQ, HQ, NQ):We provide core orientation to ensure high-quality, directional data for your project, available in a range of core sizes (PQ, HQ, NQ).",
        "Down-Hole Surveys: Utilizing advanced down-hole survey techniques, including camera surveys and gyro tools, we deliver accurate positioning and data collection from deep underground.",
        "Directional Drilling: We offer advanced directional drilling solutions using wedge and Navi motor directional tools. This allows us to follow complex ore body structures with precision."
      ]
    },
    {
      title: 'Reverse Circulation Drilling',
      description: ['Reverse Circulation (RC) Drilling is our forte when it comes to efficiently collecting representative samples from a variety of geological formations. This method offers rapid drilling progress and sample recovery. Our RC Drilling services are particularly well-suited for bulk sampling and assessment, making it an economical choice for resource evaluation.', 'Our RC Drilling Services Include:'],
      image: service1,
      lists: [
        "RC Exploration Drilling: Ideal for collecting geological data during early-stage exploration. Our RC rigs are equipped to handle challenging terrains while delivering high-quality samples quickly.",
        "RC Grade Control Drilling: Our RC grade control drilling ensures precise sample collection for accurate mine planning and ore-grade estimation, helping you optimize resource extraction.",
        "Down-Hole Surveys: We use stainless steel rods or advanced gyro tools for down-hole surveys, ensuring accurate measurement of borehole paths and mineral locations."
      ]
    }
  ];

  const callForAction = {
    title: 'Ready to explore our services?',
    description: ["At XP Drilling Services, we are committed to delivering reliable, efficient, and high-quality drilling solutions tailored to meet the unique needs of your project. Our experienced team, cutting-edge technology, and dedication to safety and sustainability ensure that we not only meet but exceed industry standards. Whether you require precision Diamond Drilling, Reverse Circulation, or custom drilling solutions, XP Drilling Services is your trusted partner in driving success. Let us help you unlock your project’s full potential with expertise you can depend on."],
    image: JoinUs,
    butonText: 'Contact Us'
  }
  return (
    <>
      <PageBanner
        title="Our Services"
        sousTitle="Precision Drilling Solutions Tailored to Your Needs"
        image={BannerImg}
      />
      <main className="services-page">
        <ContentForPage
          postBanner={postBanner}
          pageOptions={pageOpations}
          page={{title: 'Our Services', url:'/services'}}
          callForAction={callForAction}
          haveSideBar={false}
        />
      </main>
    </>
  )
};

export default Services;