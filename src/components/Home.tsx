import '../styles/home.scss';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';

const Home = () => {
  return (
    <section className="home-header">
      <video className="video-slide" src={video1} autoPlay muted loop></video>
      <div className="slide">
        <p className="slide-title">CREATE WHATEVER YOU WANT</p>
        <h1>Quality leads with the industry!</h1>
        <div className="btns">
          <a href="#" className="home-btn">Contact Us</a>
          <a href="#" className="home-btn">About Us</a>
        </div>
      </div>
      {/* <div className="slide">
        <p>CREATE WHATEVER YOU WANT</p>
        <h1>Quality leads with the industry!</h1>
        <div className="btns">
          <a href="#" className="home-btn">Contact Us</a>
          <a href="#" className="home-btn">About Us</a>
        </div>
      </div> */}
      <button type="button" className="slider-nav next">&#10094;</button >
      <button type="button" className="slider-nav prev">&#10095;</button >
    </section>
  )
};

export default Home;