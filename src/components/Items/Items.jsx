import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Items.scss";

const skillsInDetails = [
  {
    id: 1,
    skill: "Javascript",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 2,
    skill: "ReactJS",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 3,
    skill: "NodeJS",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 4,
    skill: "ExpressJS",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 5,
    skill: "Python",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 6,
    skill: "MySQL",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 7,
    skill: "SQL",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 8,
    skill: "HTML5",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 9,
    skill: "CSS3",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 10,
    skill: "SASS",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
  {
    id: 11,
    skill: "Frameworks y Librerias",
    details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"],
  },
];

const Items = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <div className="items">
        {skillsInDetails.map((skill) => (
          <motion.div
            key={skill.id}
            className="items-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <p className="items-text">{skill.skill}</p>
          </motion.div>
        ))}
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
                {selectedSkill.details.map((detail, index) => (
                  <li className="items-modal-text" key={index}>
                    ✅ {detail}
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
