const express = require("express");
const app = express();
const scheduler = require("node-cron");
const { transporter, options } = require("./services/email");

const PORT = 1337;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// To schedule
// The first string is time interval ... 0 0 1 1 * for “At 00:00 on day-of-month 1 in January.”
// Here it says to do this task every 10th second (steps)
scheduler.schedule("*/10 * * * * *", () => {
  console.log("Running Schedule...");
  transporter.sendMail(options, (err, info) => {
    console.log("Sending Mail ... ");
    if (err) console.error(err);
    console.log(`Sent Mail with info : ${JSON.stringify(info)}`);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on Port : ${PORT}`);
});
