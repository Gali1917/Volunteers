import { useState, createContext, useContext, useEffect } from "react";
import { getTareasRequests } from "../api/tareas";
import { getTareasDetails } from "../api/tareas";

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
    const getTarea = async () =>{
        const res = await getTareasDetails();
        setTareas(res.data);
    }
    useEffect(() =>{
        getTareas();
        getTarea();
      }, [])
    console.log(tareas);

    return (
        <tareasContext.Provider value={{
            tareas,
            getTareas
        }}>
            {children}
        </tareasContext.Provider>)
}