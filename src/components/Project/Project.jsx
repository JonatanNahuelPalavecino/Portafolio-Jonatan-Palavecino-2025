import { useParams } from "react-router-dom";
import icons from "../../helpers/icons/icons";
import "./Project.scss";
import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { Comentarios } from "../Comentarios/Comentarios";
import Like from "../Like/Like";
import FadeContainer from "../FadeContainer/FadeContainer";
import Title from "../Title/Title";
import Boton from "../Boton/Boton";
import { Box, Skeleton } from "@mui/material";

const Project = () => {
  const url = import.meta.env.VITE_SERVER;
  const { data, error, loading, fetchData } = useFetch();
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const parameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filters: { id_project: id } }),
    };

    fetchData(`${url}/proyectos/ver-proyectos`, parameters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (data?.data) {
      setProject(data.data);
      document.title = `Proyecto ${data.data[0]?.nombre} - Portfolio Jonatan Palavecino - Desarrollador Fullstack`;
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <Box sx={{mx: 2}}>
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ my: 2, width: "100%", height: "60px" }}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ my: 1, width: "100%", height: "800px" }}
          />
        </Box>
      ) : error ? (
        <p>Hubo un error: {error.message || error}</p>
      ) : (
        project?.map((el) => (
          <section key={el.id_project} className="project">
            <FadeContainer
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Title title={el.nombre} />
            </FadeContainer>
            <img
              className="project-img"
              src={`${url}/public/projects/${el.imagen_project}`}
              alt={el.nombre}
            />
            <div className="project-description">
              <Like
                likes={el.likes}
                totalLikes={el.likes.length}
                totalComments={el.comentarios.length}
                setProject={setProject}
                idProject={el.id_project}
              />
              <p className="project-text">
                Link al repositorio Github / Pagina Web
              </p>
              <div className="project-links">
                <a
                  className="project-item"
                  href={el.github_fe}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {icons.github}
                </a>
                {el.github_be && (
                  <a
                    className="project-item"
                    href={el.github_be}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {icons.github}
                  </a>
                )}
                <a
                  className="project-item"
                  href={el.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {icons.link}
                </a>
              </div>
              <p className="project-desc">{el.descripcion}</p>
            </div>
            <Comentarios
              comentarios={el.comentarios}
              id_project={el.id_project}
              setProject={setProject}
              projectName={el.nombre}
            />
            <Boton path={"/"} />
          </section>
        ))
      )}
    </>
  );
};

export default Project;
