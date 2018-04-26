const nodemailer = require('nodemailer')

function forRegistration(email,username,password){
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'todofancysuper@gmail.com',
      pass: 'todofancy'
    }
  });

  var mailOptions = {
    from: 'todofancysuper@gmail.com',
    to: `${email}`,
    subject: 'Your Account Has Made!',
    text: `Thanks For Sign Up in Omong Kosong App!\n\nYour username: ${username}\nYour password: ${password}\n\nHappy Q & A :D!`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  forRegistration: forRegistration
}
