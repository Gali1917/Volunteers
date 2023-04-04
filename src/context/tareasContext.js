import { useState, createContext, useContext, useEffect } from "react";
import { getTareasRequests, postTareasRequests } from "../api/tareas";

const tareasContext = createContext();

export const useTareas = () =>{
    const context = useContext(tareasContext);
    return context;
}

export const TareasProvider = ({ children }) => {
    const [tareas, setTareas] = useState([]);

    const getTareas = async () =>{
        const res = await getTareasRequests();
        setTareas(res.data);
    }
    const postTarea = async (tarea) =>{
        const res = await postTareasRequests(tarea);
        setTareas([...tareas, res.data]);
    }
    const deleteTarea = id =>{
        console.log(id);
    }
    useEffect(() =>{
        getTareas();
      }, [])
    console.log(tareas);

    return (
        <tareasContext.Provider value={{
            tareas,
            getTareas,
            postTarea,
            deleteTarea
        }}>
            {children}
        </tareasContext.Provider>)
}