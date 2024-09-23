export const confirmEmailTemplate = (email , tokenInserted) => {
    const encodedEmail = encodeURIComponent(email);
    const subject = 'Por favor, confirma tu dirección de correo electrónico para Vendalia.es';
    const emailBody = `<table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
      <tr>
          <td style="text-align: center;">
              <h1 style="color: #333333;">Confirma tu correo electrónico</h1>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Hola!,</p>
              <p>Gracias por registrarte en Vendalia.es. Para completar tu registro y verificar tu cuenta, por favor confirma tu dirección de correo electrónico haciendo clic en el siguiente enlace:</p>
          </td>
      </tr>
      <tr>
          <td style="text-align: center; padding: 20px;">
              <a href="https://www.vendalia.es/validar_correo_electronico?email=${encodedEmail}&token=${tokenInserted}" 
                 style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 5px;">
                  Confirmar correo electrónico
              </a>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 0; color: #555555;">
              <p>Si no solicitaste esta verificación, por favor ignora este mensaje.</p>
              <p>Gracias,</p>
              <p>El equipo de Vendalia.es</p>
          </td>
      </tr>
  </table>`;

  return {subject : subject , body : emailBody}
}