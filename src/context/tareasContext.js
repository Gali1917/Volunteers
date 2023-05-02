import { useState, createContext, useContext, useEffect } from "react";
import {
  getTareasRequest,
  postTareasRequest,
  deleteTareaRequest,
  getTareaRequest,
  updateTareaRequest,
} from "../api/tareas";
import { sendEmailRequest } from "../api/email";

const tareasContext = createContext();

export const useTareas = () => {
  const context = useContext(tareasContext);
  return context;
};

export const TareasProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const getTareas = async () => {
    const res = await getTareasRequest();
    setTareas(res.data);
  };
  const getTarea = async (id) => {
    const res = await getTareaRequest(id);
    return res.data;
  };
  
  const postTarea = async (tarea) => {
    try {
      const res = await postTareasRequest(tarea);
      setTareas([...tareas, res.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTarea = async (id) => {
    const res = await deleteTareaRequest(id);
    if (res.status === 204) {
      setTareas(tareas.filter((tarea) => tarea._id !== id));
    }
  };
  const updateTarea = async (id, tarea) => {
    const res = await updateTareaRequest(id, tarea);
    tareas.map((tarea) => (tarea._id === id ? res.data : tarea));
  };
  useEffect(() => {
    getTareas();
  }, []);

  return (
    <tareasContext.Provider
      value={{
        tareas,
        getTareas,
        getTarea,
        postTarea,
        deleteTarea,
        updateTarea,
      }}
    >
      {children}
    </tareasContext.Provider>
  );
};
