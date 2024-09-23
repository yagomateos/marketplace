export const ResetPasswordEmailTemplate = (email, tokenInserted) => {
    const encodedEmail = encodeURIComponent(email);
    const subject = 'Restablece tu contraseña para Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">Restablece tu contraseña</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola,</p>
              <p>Hemos recibido una solicitud para restablecer tu contraseña en Vendalia.es. Si no solicitaste este cambio, por favor ignora este mensaje. Si solicitaste restablecer tu contraseña, haz clic en el siguiente enlace:</p>
          </td>
      </tr>
      <tr>
          <td style="text-align: center; padding: 20px;">
              <a href="http://localhost:3000/olvidado_tu_contrasena?email=${encodedEmail}&token=${tokenInserted}" 
                 style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 5px;">
                  Restablecer contraseña
              </a>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Este enlace es válido solo por 24 horas. Después de este tiempo, deberás solicitar un nuevo enlace para restablecer tu contraseña.</p>
              <p>Gracias,</p>
              <p>El equipo de Vendalia.es</p>
          </td>
      </tr>
  </table>`;

    return { subject: subject, body: emailBody };
}
