export const forgotPasswordTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style type="text/css">
    a[x-apple-data-detectors] {color: inherit !important;}
  </style>
</head>
<body style="margin:15px; background-color: #fff;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #cccccc; max-width: 600px;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 70px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 30px 0 0 0;">
            <p style="margin-bottom: 20;">Greetings!</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0 0 0;">
            <p style="margin-bottom: 20;">You have requested to reset your password. Press the link below.</p>
          </td>
        </tr>
        <tr>
          <td style="display: flex; align-items: center; justify-content: center;">
            <a href="{{url}}/api/admin/verifyForgotPasswordLink/{{email}}/{{code}}" target="_blank" style="word-break: break-all; text-align: center; color: #fff; background-color: #8CC63E; text-decoration: none; padding: 12px 20px; border-radius: 4px;">Reset Password</a>
          </td>
        </tr>
      <tr>
        <td style="padding: 10px 0 0 0;">
          <p style="margin-bottom: 20;">If you have any questions, please feel free to ask - we're always happy to help out.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin-bottom: 0px;">Cheers!</p>
        </td>
      </tr>
        
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
            <tr>
                <td style="display: flex; align-items: center; justify-content: center; padding: 0px 8px 0px 0px; height: 110px;">
                    <img style="width: 100%;" src="{{backendURL}}/api/v1/public/fitcon-logo.svg"/>
                </td>
                <td style="width: 3px; background-color: #1C85C7;"></td>
                <td style="width: 430px; padding-left: 10px;">
                      <p style="color:#1C85C7; margin: 0 12px;"> 
                        <strong>Business Development</strong>
                        <p style="font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #1C85C7;">a:</strong>  IXTEL | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p style= "font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #1C85C7;">e:</strong> <a class="fa" href="ginni.net"  style="color:darkblue; text-decoration: underline;">Info@ginni.com</a>
                            | <strong  style="color: #1C85C7;">w:</strong> <a class="fa" href="https://www.ginni.com" target="blank" style="color:darkblue; text-decoration: underline;">www.ginni.com</a>
                        </p>
                        <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                            <strong style="color: #1C85C7;">p:</strong>  +31(0)85 200 71 93
                        </p>
                        <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/facebook.png" width="17px" height='17px' />
                        </a>
                        <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/twitter.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/linkedin.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/instagram.png" width="17px" height='17px' />
                        </a>
                      </p>
                </td>
            </tr>
      </table>
    </td>
  </tr>
</table>
      </td>
    </tr>
  </table>
</body>
</html>`;

export const signup_template = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style type="text/css">
    a[x-apple-data-detectors] {color: inherit !important;}
  </style>
</head>
<body style="margin:15px; background-color: #fff;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">
<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border: 1px solid #cccccc; max-width: 600px;">
  <tr>
    <td bgcolor="#ffffff" style="padding: 40px 30px 70px 30px;">
      <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        <tr>
          <td style="font-family: Arial, Helvetica, sans-serif; padding: 30px 0 0 0;">
            <p style="margin-bottom: 20;">Greetings!</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0 0 0;">
            <p style="margin-bottom: 20;">We're excited to have you get started. First, you need to confirm your account. Just press the link below.</p>
          </td>
        </tr>
        <tr>
          <td style="display: flex; align-items: center; justify-content: center;">
            <a href="{{CLIENT_WEB_APP}}/verify-signup/{{email}}/{{code}}" target="_blank" style="word-break: break-all; text-align: center; color: #fff; background-color: #8CC63E; text-decoration: none; padding: 12px 20px; border-radius: 4px;">Verify email address</a>
          </td>
        </tr>
      <tr>
        <td style="padding: 10px 0 0 0;">
          <p style="margin-bottom: 20;">If you have any questions, please feel free to ask - we're always happy to help out.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin-bottom: 0px;">Cheers!</p>
        </td>
      </tr>
        
      </table>
    </td>
  </tr>
  <tr>
    <td bgcolor="#F5F5F5" style="padding: 5px 10px 5px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;" align="left">
            <tr>
                <td style="display: flex; align-items: center; justify-content: center; padding: 0px 8px 0px 0px; height: 110px;">
                    <img style="width: 100%;" src="{{backendURL}}/api/v1/public/fitcon-logo.svg"/>
                </td>
                <td style="width: 3px; background-color: #1C85C7;"></td>
                <td style="width: 430px; padding-left: 10px;">
                      <p style="color:#1C85C7; margin: 0 12px;"> 
                        <strong>Business Development</strong>
                        <p style="font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #1C85C7;">a:</strong>  IXTEL | Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p style= "font-size: small; color: #000; margin: 2px;"> 
                            <strong style="color: #1C85C7;">e:</strong> <a class="fa" href="mailto:info@fitcon.com"  style="color:darkblue; text-decoration: underline;">Info@fitcon.com</a>
                            | <strong  style="color: #1C85C7;">w:</strong> <a class="fa" href="https://www.fitcon.com" target="blank" style="color:darkblue; text-decoration: underline;">www.fitcon.com</a>
                        </p>
                        <p style="font-size: small; color: #000; margin: 2px; padding-bottom: 5px;"> 
                            <strong style="color: #1C85C7;">p:</strong>  +31(0)85 200 71 93
                        </p>
                        <a href="https://www.facebook.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/facebook.png" width="17px" height='17px' />
                        </a>
                        <a href="https://twitter.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/twitter.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.linkedin.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/linkedin.png" width="17px" height='17px' />
                        </a>
                        <a href="https://www.instagram.com/" target="blank" style="text-decoration: none; padding: 2px;"> 
                          <img src="{{backendURL}}/api/v1/public/instagram.png" width="17px" height='17px' />
                        </a>
                      </p>
                </td>
            </tr>
      </table>
    </td>
  </tr>
</table>
      </td>
    </tr>
  </table>
</body>
</html>`;



