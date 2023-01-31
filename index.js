const express = require("express");
const app = express();
const scheduler = require("node-cron");
const { transporter, options } = require("./services/email");

const PORT = 1337;

// log every second --> ex of node-cron.schedule()
// scheduler.schedule("* * * * * *",() => {
//     console.log('In schedule');
// })

scheduler.schedule("* * * * * *", () => {
    console.log("inside Scheduler");
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Email send with info = ", info);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
});
