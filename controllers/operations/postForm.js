import { transporter } from "../../config/mail.js";

const postForm = async (req, res) => {
    const { fullname, email, phone, question } = req.body;

    await transporter.sendMail({
        from: `${email}`, // sender address
        to: "unidosporlaalegria2021@gmail.com", // list of receivers
        subject: "Consulta desde su sitio web", // Subject line
        text: `Hola! mi nombre es ${fullname}, les escribia por que tenia la siguiente consulta: "${question}". Mi numero de contacto es ${phone} y mi email ${email}. Espero su respuesta, muchas gracias!`, // plain text body
    });

    res.json({status:200, res:'succed'})
}

export default postForm