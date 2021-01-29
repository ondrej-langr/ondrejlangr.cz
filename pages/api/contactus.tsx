import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ResponseData = {

}

const transporter = nodemailer.createTransport({
    host: 'smtp.forpsi.com',
    port: 587 ,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD
    }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    res.setHeader('Content-Type', 'application/json')
    const parsed = JSON.parse(req.body);

    if (parsed?.name && parsed?.email && parsed?.text) {

        await transporter.sendMail({
            from: process.env.MAILER_EMAIL,
            to:'hi@ondrejlangr.cz',
            subject: 'Nová zpráva v kontaktním formuláři!',
            html: `<h1>Zpráva od: ${parsed.name}</h1>
            <p><b>Obsah zprávy:</b> ${parsed.text}</p><br/>
            <a href="mailto:${parsed.email}">Odpovědět na mail: ${parsed.email}</a>`
        });



        return res.status(200).json({ error: false });
    } else {
        return res.status(404).json({ error: true, payload: parsed })
    }

}