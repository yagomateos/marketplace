export const EmailSuccessEmailTemplate = () => {
    const subject = 'Tu dirección de correo electrónico ha sido actualizada en Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">Correo electrónico actualizado exitosamente</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola,</p>
              <p>Te informamos que tu dirección de correo electrónico ha sido actualizada correctamente en Vendalia.es.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Si no solicitaste este cambio, por favor ponte en contacto con nosotros de inmediato.</p>
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
