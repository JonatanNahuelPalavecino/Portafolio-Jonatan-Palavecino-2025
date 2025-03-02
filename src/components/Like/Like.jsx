import PropTypes from "prop-types";
import icons from "../../helpers/icons/icons";
import { Tooltip } from "@mui/material";
import "./Like.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import dayjs from "dayjs";
import handleLike from "../../helpers/peticiones/handleLike";
import { toast } from "sonner";

const Like = ({ likes, totalLikes, totalComments, setProject, idProject }) => {
  const url = import.meta.env.VITE_SERVER;
  const { user } = useContext(Context);
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitLike = async () => {
    if (isLoading) return;

    if (!user.auth) {
      toast.warning("Por favor, inicia sesión o registrate para poner tu like!")
      return
    }

    setIsLoading(true);
    setLike(!like);

    const data = await handleLike(
      url,
      like,
      user.userId,
      idProject,
      setIsLoading
    );

    if (data.estado === "error") {
      return;
    }

    setProject((prev) => {
      const updatedProject = { ...prev[0] };
      const likesArray = updatedProject.likes;

      const isLiked = likesArray.some((l) => l.id_usuario === user.userId);

      if (isLiked) {
        updatedProject.likes = likesArray.filter(
          (l) => l.id_usuario !== user.userId
        );
      } else {
        const newLike = {
          fecha_me_gusta: dayjs().format("DD/MM/YYYY"),
          id_proyecto: idProject,
          id_usuario: user.userId,
          user_name: user.user_name,
          imagen_usuario: user.imagen,
        };

        updatedProject.likes = [...likesArray, newLike];
      }

      return [updatedProject];
    });
  };

  useEffect(() => {
    if (likes.some((like) => like.id_usuario === user.userId)) {
      setLike(true);
    }
  }, [likes, user.userId]);

  return (
    <div className="likes">
      <div className="likes-container">
        <div className="likes-item">
          {totalLikes}
          {icons.like({ submitLike, like })}
        </div>
        <div className="likes-item">
          {totalComments}
          {icons.comment}
        </div>
      </div>
      <div className="likes-container">
        <p className="likes-description">Este proyecto les gusta a: </p>
        <div className="likes-box">
          {likes.slice(0, 4).map((like, key) => (
            <Tooltip key={key} title={like.user_name}>
              <img
                className="likes-image"
                src={`${url}/public/users/${like.imagen_usuario}`}
                alt={like.user_name}
              />
            </Tooltip>
          ))}
          {likes.length > 4 && (
            <Tooltip
              title={
                <div style={{ textAlign: "center" }}>
                  {likes.slice(4).map((l, index) => (
                    <div key={index}>{l.user_name}</div>
                  ))}
                </div>
              }
              arrow
            >
              <div className="likes-more">+{likes.length - 4}</div>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default Like;

Like.propTypes = {
  likes: PropTypes.array.isRequired,
  totalLikes: PropTypes.number.isRequired,
  totalComments: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired,
  idProject: PropTypes.number.isRequired,
};
