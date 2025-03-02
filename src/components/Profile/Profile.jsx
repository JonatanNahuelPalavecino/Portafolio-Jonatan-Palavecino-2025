import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import FadeContainer from "../FadeContainer/FadeContainer";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { Skeleton } from "@mui/material";
import "./Profile.scss";
import Boton from "../Boton/Boton";
import WindowConfirm from "../windowConfirm/WindowConfirm";
import handleDesactivarUser from "../../helpers/peticiones/handleDesactivarUser";


const Profile = () => {
  const { user, setLoading } = useContext(Context);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_SERVER;
  const { data, error, loading, fetchData } = useFetch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!user.auth) {
      navigate("/");
    }

    const parameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filters: { id_usuario: user.userId } }),
    };

    fetchData(`${url}/auth/buscar-usuario`, parameters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.userId]);

  return (
    <section className="profile">
      <FadeContainer
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Title title={"Mi Perfil"} />
      </FadeContainer>
      {loading ? (
        <div className="profile-container">
          <Skeleton
            variant="rounded"
            width={400}
            height={60}
            animation="wave"
            sx={{ my: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={400}
            height={60}
            animation="wave"
            sx={{ my: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={400}
            height={60}
            animation="wave"
            sx={{ my: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={400}
            height={60}
            animation="wave"
            sx={{ my: 1 }}
          />
          <Skeleton
            variant="rounded"
            width={400}
            height={600}
            animation="wave"
            sx={{ my: 1 }}
          />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="profile-container">
            <div className="profile-box">
              <p className="profile-label">Nombre: </p>
              <p className="profile-data">{data?.data?.nombre}</p>
            </div>
            <div className="profile-box">
              <p className="profile-label">Apellido: </p>
              <p className="profile-data">{data.data?.apellido}</p>
            </div>
            <div className="profile-box">
              <p className="profile-label">Usuario: </p>
              <p className="profile-data">{data.data?.user_name}</p>
            </div>
            <div className="profile-box">
              <p className="profile-label">Email: </p>
              <p className="profile-data">{data.data?.email}</p>
            </div>
            <div className="profile-box">
              <p className="profile-label">Imagen de Usuario: </p>
              <img
                className="profile-img"
                src={`${url}/public/users/${data.data?.imagen_usuario}`}
                alt={data.data?.imagen_usuario}
              />
            </div>
            <button className="profile-btn" onClick={handleOpen}>
              <span className="profile-btn-desc">Desactivar cuenta</span>
            </button>
            <WindowConfirm
            fn={handleDesactivarUser}
              open={open}
              setOpen={setOpen}
              user={user}
              url={url}
              navigate={navigate}
              setLoading={setLoading}
              title="Desactivar cuenta"
              message="¿Estas seguro que querés desactivar tu cuenta?"
              btn="ACEPTAR"
            />
          </div>
        </>
      )}
      <Boton path={"/"} />
    </section>
  );
};

export default Profile;
