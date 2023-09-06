import "./Slider.css";
import { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const translateX = slide * -100;
  const nextSlide = () => {
    setSlide((slide + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000 * 60);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, images]);

  return (
    <div className="carousel">
      <div
        className="arrow-container-left"
        onClick={() => {
          prevSlide();
        }}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow arrow-left"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="slider-container">
        <div className="slider-inner" style={{ transform: `translateX(${translateX}%)` }}>
          {images.map((val, idx) => (
            <div key={idx} className={`slide ${slide === idx ? "active" : ""}`}>
              <img src={val.src} className="slide-image" />
              <div className="slide-header">{val.heading}</div>
              <form className="slide-form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Room" />
                <input type="text" placeholder="Date" />
                <button className="slide-btn" type="button">
                  Search
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
      <div
        className="arrow-container-right"
        onClick={() => {
          nextSlide();
        }}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow arrow-right"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="indicators">
        {images.map((_, idx) => {
          return (
            <button
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              key={idx}
              onClick={() => {
                setSlide(idx);
              }}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
