const { urlencoded } = require("express");
const express = require("express");
const app = express();
const scheduler = require("node-cron");
const { transporter, options } = require("./services/email");

const PORT = 1337;

// To schedule
// The first string is time interval ...
// Here it says to do this task every 10th second (steps)
scheduler.schedule("*/10 * * * * *", () => {
    console.log("Running Schedule...");
    transporter.sendMail(options, (err, info) => {
        console.log("Sending Mail ... ");
        if (err) console.error(err);
        console.log(`Sent Mail with info : ${info}`);
    });
});

app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
});
