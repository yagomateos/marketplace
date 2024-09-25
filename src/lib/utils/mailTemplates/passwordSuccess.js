export const PasswordSuccessEmailTemplate = () => {
    const subject = 'Tu contraseña ha sido actualizada exitosamente en Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">Contraseña actualizada exitosamente</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola,</p>
              <p>Queremos informarte que tu contraseña ha sido actualizada correctamente.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Si no solicitaste este cambio de contraseña, por favor ponte en contacto con nosotros de inmediato.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Gracias,</p>
              <p>El equipo de Vendalia.es</p>
          </td>
      </tr>
  </table>`;

  return {subject: subject, body: emailBody};
};
