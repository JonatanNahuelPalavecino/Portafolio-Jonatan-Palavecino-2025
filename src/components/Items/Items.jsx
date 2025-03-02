import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Items.scss";
import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const Items = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { data, error, loading, fetchData } = useFetch();
  const url = import.meta.env.VITE_SERVER

  useEffect(() => {
    fetchData(`${url}/conocimientos/ver-total-conocimientos`, {});
  }, [fetchData, url]);

  return (
    <>
      <div className="items">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <motion.div key={index} className="items-card items-skeletor" />
          ))
        ) : error ? (
          <motion.div
            className="items-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="items-text">{error}</p>
          </motion.div>
        ) : (
          data.map((skill) => (
            <motion.div
              key={skill.id_conocimiento}
              className="items-card"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(skill.detalle)}
            >
              <p className="items-text">{skill.nombre}</p>
            </motion.div>
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="items-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="items-modal"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="items-modal-title">{selectedSkill.skill}</h2>
              <ul className="items-modal-box">
                {selectedSkill.map((detail, index) => (
                  <li className="items-modal-text" key={index}>
                    ✅ {detail.detalle}
                  </li>
                ))}
              </ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="items-modal-btn"
                onClick={() => setSelectedSkill(null)}
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#4C4F5A"
                    d="M6 6L18 18"
                  ></path>{" "}
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#4C4F5A"
                    d="M18 6L6 18"
                  ></path>{" "}
                </g>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Items;
