const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "dsenturk25@my.uaa.k12.tr",
        subject: "Welcome to the task manager app!",
        text: `Welcome to the app, ${name}, Let me know how are you doing currently?`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "dsenturk25@my.uaa.k12.tr",
        subject: "Why did you leave us 😔",
        text: `Goodbye, ${name}. We are too sad because of not seeing you anymore...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}