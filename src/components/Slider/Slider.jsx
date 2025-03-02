import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Slider.scss";
import Card from "../Card/Card";
import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const parameters = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ filters: {} }),
};

const Slider = () => {
  const url = import.meta.env.VITE_SERVER;
  const { data, error, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`${url}/proyectos/ver-proyectos`, parameters);
  }, [fetchData, url]);

  const projects = data?.data || [];

  return loading ? (
    <p>Cargando...</p>
  ) : error ? (
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
      <div className="slider-error">
        <p className="slider-error-text">{error}</p>
      </div>
    </div>
  ) : (
    <Splide>
      {projects.length === 0 ? (
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
          <div className="slider-error">
            <p className="slider-error-text">No hay proyectos Disponibles</p>
          </div>
        </div>
      ) : (
        projects.map((project) => (
          <SplideSlide key={project.id_project}>
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
                image={`${url}/public/projects/${project.imagen_project}`}
                altText={project.nombre}
                description={project.introduccion}
                id={project.id_project}
                comentarios={project.comentarios}
                like={project.likes}
              />
            </div>
          </SplideSlide>
        ))
      )}
    </Splide>
  );
};

export default Slider;

// {loading ? (
//   <SplideSlide>
//     <p>Cargando...</p>
//   </SplideSlide>
// ) : error ? (
//   <SplideSlide>
//     <p>Hubo un error: {error.message || error}</p>
//   </SplideSlide>
// ) : projects.length === 0 ? (
//   <SplideSlide>
//     <p>No hay proyectos disponibles</p>
//   </SplideSlide>
// ) : (

// )}
