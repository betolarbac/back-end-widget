import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "./mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2f50c7c88a8ef9",
      pass: "3d932a9970187c"
    }
  });

export class NodemailermailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
                  from: 'equipe Feedget <oi@feedget.com>',
                to: 'Roberto Cabral <roberto_jr123@hotmail.com>',
                   subject,
                    html: body,
                });
            
    }
}