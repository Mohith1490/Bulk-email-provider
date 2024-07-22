import nodemailer from 'nodemailer'
import http from 'http'
import data from './info.js'

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 587,
        auth: {
            user: "mohith1754singh@gmail.com",
            pass: "gmail app password"

        }
    });



    for (const key in data) {
     const   receiver = {
            from: "mohith1754singh@gmail.com",
            to: `${data[key]}`,
            subject: "testing the service",
            text: "Hello this is mohith!"
        };



        auth.sendMail(receiver, (error, emailResponse) => {
            if (error) {
                throw error;
            }
            console.log("success!");
            response.end();
        });

    }
});

server.listen(8080);

