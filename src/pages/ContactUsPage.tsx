import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import ContactUs from "../components/ContactUs";
import '../styles/contactus.scss';

const AboutUsPage = () => (
  <>
    <PageBanner title="Contact Us" image={BannerImg} />
    <main>
      <ContactUs />
      <section className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.920265941953!2d-0.23214162490950982!3d5.578805094401857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99000669412f%3A0xad63eee8314f2453!2sKumasi%20-%20Accra!5e0!3m2!1sen!2sgh!4v1731765345550!5m2!1sen!2sgh"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </main>
  </>
);

export default AboutUsPage;