import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsInDetails = [
  { id: 1, skill: "Javascript", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 2, skill: "ReactJS", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 3, skill: "NodeJS", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 4, skill: "ExpressJS", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 5, skill: "Python", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 6, skill: "MySQL", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 7, skill: "SQL", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 8, skill: "HTML5", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 9, skill: "CSS3", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 10, skill: "SASS", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
  { id: 11, skill: "Frameworks y Librerias", details: ["Habilidad 1", "Habilidad 2", "Habilidad 3", "Habilidad 4"] },
];

const Items = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
        {skillsInDetails.map((skill) => (
          <motion.div
            key={skill.id}
            className="card"
            style={{
              padding: "16px",
              background: "#f0f0f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              textAlign: "center",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <h3>{skill.skill}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: "#fff",
                padding: "24px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
            >
              <h2>{selectedSkill.skill}</h2>
              <ul>
                {selectedSkill.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <button
                style={{
                  marginTop: "16px",
                  padding: "8px 16px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedSkill(null)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Items;
