export const successOrderTemplate = () => {
    const subject = 'Gracias por tu pedido en Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">Pedido Confirmado</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola,</p>
              <p>Gracias por realizar tu pedido en Vendalia.es. Nos complace informarte que tu pedido ha sido confirmado y está en proceso.</p>
          </td>
      </tr>
      <tr>
          <td style="text-align: center; padding: 20px;">
              <a href="https://www.vendalia.es/" 
                 style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 5px;">
                  Ver Información del Pedido
              </a>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Pronto recibirás un correo adicional con los detalles de envío y seguimiento.</p>
              <p>Para cualquier consulta sobre tu pedido, no dudes en contactarnos.</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Gracias por elegir Vendalia.es.</p>
              <p>El equipo de Vendalia.es</p>
          </td>
      </tr>
  </table>`;

  return {subject: subject, body: emailBody};
};
