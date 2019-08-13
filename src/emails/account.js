const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'shameizrangwala@gmail.com',
        subject: 'Thanks for Joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'shameizrangwala@gmail.com',
        subject: 'Sorry to see you go!',
        text: `It's sad to see you go, ${name}. Please let us know if we could have done things differently.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}