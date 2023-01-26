const nodemailer = require("nodemailer");

export default function (req, res) {
  const htmlSendToAdmin = `
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
      <tr>
        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
      
            <tr>
              <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
                <p style="margin: 0;">A request has been received from 9 Solutions. See below for more information:</p>
              </td>
            </tr>
            <tr>
                <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
                    <p style="text-align:left; padding-top: 10px;">
                        <i><strong>Name: </strong>${req.body.fullName}</i><br>
                        <i><strong>Email address: </strong>${req.body.email}</i><br>
                        <i><strong>Phone number: </strong>${req.body.phone}</i><br>
                        <i><strong>Project description: </strong>${req.body.message}</i><br>
                    </p>
                  </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
                <tr>
                    <td style="width: 90px;">
                        <img style="width: 90px;" src="/public/favicon.svg"/>
                    </td>
                    <td style="width: 3px; background-color: #5bb286;"></td>
                    <td style="width: 430px; padding-left: 10px;">
                          <p style="color:#5bb286; margin: 0 12px;"> 
                            <strong>Business Development</strong>
                            <p style="font-size: small; color: #000; margin: 2px;"> 
                                <strong style="color: #5bb286;">a:</strong>  9 Solutions | Shop no 25, Jason terrace Clifton block 2, Karachi.
                            </p>
                            <p style= "font-size: small; color: #000; margin: 2px;"> 
                                <strong style="color: #5bb286;">e:</strong> <a class="fa" href="mailto:9solutionsllc@gmail.com"  style="color:darkgreen; text-decoration: underline;">9solutionsllc@gmail.com</a>
                                | <strong  style="color: #5bb286;">w:</strong> <a class="fa" href="https://www.9solutions.co" target="blank" style="color:darkgreen; text-decoration: underline;">www.ejazpatientcare.com</a>
                            </p>
                            <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                                <strong style="color: #5bb286;">p:</strong>  0342-2586069 | 0344-8647722 
                            </p>
                            <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                              <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                            </a>
                            <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                              <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                            </a>
                            <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                              <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                            </a>
                            <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                              <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/instagram_gakagk.png" width="17px" height='17px' />
                            </a>
                          </p>
                    </td>
                </tr>
          </table>
        </td>
      </tr>
      </table>`;

  const htmlSendToUser = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
  
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 20px 0 0 0;">
            <p style="margin: 0;">Thankyou for your interest in 9Solutions</p>
            <p style="margin-top: 15px;">Our team will be in coordination with you shortly</p>
            <p style="margin-top: 30px;">To learn more about 9 Solutions, please visit our website at <a class="fa" href="https://www.9solutions.co" target="blank" style="color:darkgreen; text-decoration: underline;">www.9solutions.co</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
  <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
          <tr>
              <td style="width: 90px;">
                  <img style="width: 90px;" src="/public/favicon.svg"/>
              </td>
              <td style="width: 3px; background-color: #5bb286;"></td>
              <td style="width: 430px; padding-left: 10px;">
                    <p style="color:#5bb286; margin: 0 12px;"> 
                      <strong>Business Development</strong>
                      <p style="font-size: small; color: #000; margin: 2px;"> 
                          <strong style="color: #5bb286;">a:</strong>  9 Solutions | 651 N Broad St, Suite 201, Middletown, 19709, NewCastle, Delaware.
                      </p>
                      <p style= "font-size: small; color: #000; margin: 2px;"> 
                          <strong style="color: #5bb286;">e:</strong> <a class="fa" href="mailto:9solutionsllc@gmail.com"  style="color:darkgreen; text-decoration: underline;">9solutionsllc@gmail.com</a>
                          | <strong  style="color: #5bb286;">w:</strong> <a class="fa" href="https://www.9solutions.co" target="blank" style="color:darkgreen; text-decoration: underline;">www.9solutions.co</a>
                      </p>
                      <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                          <strong style="color: #5bb286;">p:</strong>  0342-2586069 | 0344-8647722 
                      </p>
                      <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/facebook_ekglz7.png" width="17px" height='17px' />
                      </a>
                      <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/twitter_ucracw.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/linkedin_r1qwpo.png" width="17px" height='17px' />
                      </a>
                      <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                        <img src="https://res.cloudinary.com/eforte/image/upload/v1638875372/social_icons/instagram_gakagk.png" width="17px" height='17px' />
                      </a>
                    </p>
              </td>
          </tr>
    </table>
  </td>
</tr>
  </table>`;

  try {
    const transporter = nodemailer.createTransport({
      //   host: "smtp.gmail.com",
      service: "Zoho",
      //   port: 465,
      //   ssl: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.forwarding_email,
        pass: process.env.forwarding_email_password,
      },
    });

    transporter.sendMail(
      {
        from: process.env.forwarding_email, // sender address
        to: process.env.admin_email, // list of receivers
        subject: "Request for contact from user at 9Solutions", // Subject line
        // text: "From 9 Solutions", // plain text body
        html: htmlSendToAdmin, // html body
      },
      (err, data) => {
        if (err) {
          throw new Error(err);
        } else {
          if (req.body.email) {
            transporter.sendMail(
              {
                from: process.env.admin_email, // sender address
                to: req.body.email, // list of receivers
                subject: "Thankyou for your interest in 9Solutions", // Subject line
                // text: "From 9 Solutions", // plain text body
                html: htmlSendToUser, // html body
              },
              (err, data) => {
                if (err) {
                  throw new Error(err);
                } else {
                  console.log("Email sent");
                  return res.status(200).json({
                    statusCode: 200,
                    data: data,
                  });
                }
              }
            );
          } else {
            console.log("Email sent");
            return res.status(200).json({
              statusCode: 200,
              data: data,
            });
          }
        }
      }
    );
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      error: error.message,
    });
  }
}
