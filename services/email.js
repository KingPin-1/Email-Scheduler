const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = require("../config/credentials");

// const SMTP_PORT = 587;
// const HOST_SERVICE = "smtp-relay.sendinblue.com"; Couldn't get send in blue to work

const SENDER_EMAIL = USER_EMAIL;
const RECEIVER_EMAIL = "receiver_email@provider.com";

const CC = [];
const BCC = [];

const EMAIL_SUB = "HAPPY BIRTHDAY my friend";
const EMAIL_TEXT = "AUTOMATED EMAIL SENT TO WISH YOU A HAPPY BIRTHDAY";
const EMAIL_HTML_BODY = "<h1>Happy Birthday!!!</h1>";

const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc: CC,
    bcc: BCC,
    subject: EMAIL_SUB,
    text: EMAIL_TEXT,
    html: EMAIL_HTML_BODY,
};

const transporter = nodemailer.createTransport({
    service: "hotmail", // if user email is outlook for others see doc
    auth: {
        user: USER_EMAIL,
        pass: USER_PASSWORD,
    },
});

module.exports = { transporter, options };
