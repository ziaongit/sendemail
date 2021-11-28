var express = require("express");
const nodemailer = require("nodemailer");

var app = express();

let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "./public/index.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
    auth: {
      user: 'zzziia1985@gmail.com', 
      pass: 'pass',
    },
  });

  const mailOptions = {
      from: req.body.email,
      to: 'zia_gt@yahoo.com',
      text: req.body.message,
  }
  
  transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.error(err);
        }else {
            console.log('Email sent successfully:');
        }
  })
  res.end();

});

var server = app.listen(PORT, function() {
  console.log("Express server listening on port " + PORT);
});
