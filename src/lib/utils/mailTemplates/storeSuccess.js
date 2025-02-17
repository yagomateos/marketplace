export const StoreCreationSuccessEmailTemplate = () => {
    const subject = '¡Felicidades! Has creado tu nueva tienda en Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">¡Tienda creada exitosamente!</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola,</p>
              <p>¡Enhorabuena! Has creado tu nueva tienda en Vendalia.es con éxito.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Estamos emocionados de verte crecer y estamos aquí para ayudarte en cada paso del camino.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>¡Mucho éxito con tu nueva tienda!</p>
              <p>El equipo de Vendalia.es</p>
          </td>
      </tr>
  </table>`;

  return {subject: subject, body: emailBody};
};
