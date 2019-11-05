
var nodemailer = require('nodemailer');
console.log(`../.env.${process.env.NODE_ENV}`)

const MAIL_HOST = process.env.GATSBY_NODEMAILER_HOST;
const MAIL_PORT = process.env.GATSBY_NODEMAILER_PORT;
const MAIL_USER = process.env.GATSBY_NODEMAILER_USERNAME;
const MAIL_PASS = process.env.GATSBY_NODEMAILER_PASSWORD;


var transport = {
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS
  }
}
console.log(process.env.GATSBY_LAMBDA_ENDPOINT)
console.log("hi")
console.log(transport)

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log('Verify failed');
  } else {
    console.log('Server is ready to take messages');
  }
});

// const data = JSON.parse(event.body)
// var name = data.name
// var email = data.email
// var phone = data.phone
// var preferredContact = data.preferredContact
// var city = data.city
// var appliance = data.appliance
// var description = data.description
// var content = `Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nPreferred contact: ${preferredContact} \nCity: ${city} \nAppliance: ${appliance} \nDescription: ${description}`
// var subject = `New Repair Request from ${name}`
//
// var mail = {
//   to: 'kevinvo321@gmail.com',
//   subject: subject,
//   text: content
// }

// mailer.transporter.sendMail(mail, (error, info) => {
//   if (error) {
//     console.log("error sending mail")
//     callback(null, {
//       statusCode: 200,
//       body: "fail"
//     });
//   } else {
//     console.log("mail sent")
//     callback(null, {
//       statusCode: 200,
//       body: "success"
//     });
//   }
// })

// testing purposes. simulate success and failed responses.
