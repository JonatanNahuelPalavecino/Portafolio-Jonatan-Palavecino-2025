import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Slider.scss"
import appTaller from "../../assets/app-taller.gif"
import jbpremium from "../../assets/jbpremium.gif"
import Card from "../Card/Card";

const Slider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        // autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        interval: 6000,
        pagination: true,
        arrows: true,
        speed: 1000,
      }}
      className="slider"
    >
      <SplideSlide>
        <div className="slider-box">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <Card
            image={jbpremium}
            altText="jbpremium"
            description="Una descripcion para JB Premium"
            buttonText="Ver mas"
          />
        </div>

      </SplideSlide>
      <SplideSlide>
        <div className="slider-box">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <Card
            image={appTaller}
            altText="app-taller"
            description="Una descripcion para App Taller"
            buttonText="Ver mas"
          />
        </div>

      </SplideSlide>
    </Splide>
  );
};

export default Slider;
