import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const fetchData = async (url, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const dato = await response.json();
      setData(dato);
    } catch (error) {
      setError(error);
      console.error("Error en useFetch", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    fetchData
  };
};

export default useFetch;

  // const {data, error, loading, fetchData} = useFetch()

  // useEffect(() => {

  //   fetchData("http://localhost:3000/comentarios/ver-comentarios", {})
  // }, [])

  // const cargarComentario = () => {
  //   fetchData("http://localhost:3000/comentarios/cargar-comentario", {
  //        method: "POST", 
  //        headers: {
  //            "Content-Type": "application/json"
  //        }, 
  //        body: JSON.stringify({
  //            comentario: "Hola", 
  //            id_proyecto: 3, 
  //            id_usuario: 3
  //        })
  //   })
  // }