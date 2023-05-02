import axios from "axios";

export const sendEmailRequest = async () => {
    const email = {
      to: "carlitosgaleano16@gmail.com",
      from: "carlgale93@hotmail.com",
      subject: "Verificacion de actividades",
      text: "Verificar actividades para enviar certificacion",
      html: "<p>Aprobar Certificacion</p>",
    };
  await axios.post("/send-email", email);
};
