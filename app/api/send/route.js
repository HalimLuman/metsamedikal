import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_YpZDCFLf_5KCYKD426AEabeBm5FqhfNgc');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { fullName, email, phone, message } = req.body;
      console.log(fullName, email, phone, message);

      const { data, error } = await resend.emails.send({
        from: `${email}`,
        to: ['lumanhalim2004@gmail.com'],
        subject: `New contact request from ${fullName}`,
        react: EmailTemplate({ fullName, email, phone, message }),
      });

      if (error) {
        return res.status(500).json({ error });
      }

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
