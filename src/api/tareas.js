import axios from "axios";

export const getTareasRequests = async () => await axios.get('/tareas');
export const getTareasDetails = async () => await axios.get('/tareas/:id:');
export const postTareasRequests = async (tarea) => axios.post('/tareas', tarea);