import { useState, createContext, useContext, useEffect } from "react";
import { getTareasRequests } from "../api/tareas";

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
    useEffect(() =>{
        getTareas();
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