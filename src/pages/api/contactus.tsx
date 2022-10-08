import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.forpsi.com',
  port: 587,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

export const post: APIRoute = async ({ params, request }) => {
  const { fullname, email, message } = params;
  let status = 400;
  let payload = {};

  if (fullname && email && message) {
    await transporter.sendMail({
      from: process.env.MAILER_EMAIL,
      to: 'hi@ondrejlangr.cz',
      subject: 'Nová zpráva v kontaktním formuláři!',
      html: `<h1>Zpráva od: ${fullname}</h1>
            <p><b>Obsah zprávy:</b> ${message}</p><br/>
            <p>Budget: ${params.budget || 'unknown'}</p>
            <p>Tech: ${params.tech || 'default'}</p>
            <p>Telephone: ${params.telephone || 'none'}</p>
            <a href="mailto:${email}">Odpovědět na mail: ${email}</a>`,
    });

    status = 200;
    payload = {
      error: false,
    };
  } else {
    payload = {
      error: true,
    };
  }

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
