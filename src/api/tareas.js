import axios from "axios";

export const getTareasRequest = async () => await axios.get("/api/tareas");
export const getTareaRequest = async (id) => await axios.get("/api/tareas/" + id);
export const postTareasRequest = async (tarea) => {
  const form = new FormData();
  for (let key in tarea) {
    form.append(key, tarea[key]);
  }
  return await axios.post("/api/tareas", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const deleteTareaRequest = async (id) =>
  await axios.delete("/api/tareas/" + id);
// export const updateTareaRequest = async (id, newFields) =>
//     await axios.put("/tareas/" + id, newFields);
export const updateTareaRequest = async (id, newFields) => {
    const form = new FormData();
    for (const key in newFields) {
        form.append(key, newFields[key]);

    }
  
    return await axios.put(`/api/tareas/${id}`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
  
