import axios from "axios";

export const getTareasRequest = async () => await axios.get('/tareas');
export const getTareaRequest = async id => await axios.get('/tareas/' + id);
export const postTareasRequest = async (tarea) => {
    const form = new FormData();
    for(let key in tarea){
        form.append(key, tarea[key])
    }
    return await axios.post('/tareas', form, {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });
}
export const deleteTareaRequest = async id => await axios.delete('/tareas/' + id);
export const updateTareaRequest = async (id, newFields) => await axios.put('/tareas/' + id, newFields);