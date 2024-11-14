import { useEffect, useState } from 'react';
import '../styles/home.scss';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import video3 from '../assets/3.mp4';

const Home = () => {
  const [video, setVideo] = useState(0);

  const next = () => {
    setVideo((prev) => (
      (prev + 1) > 2 ? 0 : prev += 1
    ))
  }

  const previous = () => {
    setVideo((prev) => (
      (prev - 1) < 0 ? 2 : prev -= 1
    ))
  }

  useEffect(() => {
    const videos = document.querySelectorAll('.video-slide');
    videos.forEach((item) => {
      item.classList.remove('active')
    });

    videos[video].classList.add('active');
  });

  return (
    <>
      <section className="home-header">
        <video className="video-slide" src={video1} autoPlay muted loop></video>
        <video className="video-slide" src={video2} autoPlay muted loop></video>
        <video className="video-slide" src={video3} autoPlay muted loop></video>
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
        <button onClick={next} type="button" className="slider-nav next">&#10094;</button >
        <button onClick={previous} type="button" className="slider-nav prev">&#10095;</button >
      </section>
      
    </>
  )
};

export default Home;