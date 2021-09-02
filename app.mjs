import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'anishbalasachin13@gmail.com',
        pass: "gakmjcevyhvjvgdp",
    },
})

var resevers = {
    user: "vinodgmkumar13@outlook.com, mihay50339@mnqlm.com"
}

var rand = Math.random(666);
function main() {
    transporter.sendMail({
        from: `"Anish"  <anishbalasachin13@gmail.com>`,
        to: resevers.user,
        subject: "hy this is sachins emailer from node js",
        // text: rand.toString(),
        html:"<h1> <center> This is for Sending Custom mail 👀 </h1>"

    }).then(console.log("Response Sended"));
}

main();