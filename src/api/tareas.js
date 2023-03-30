import axios from "axios";

export const getTareasRequests = async () => await axios.get('/tareas');