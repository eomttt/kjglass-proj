const nodemailer = require('nodemailer');

const config = require('./mail.config');

const transporter = nodemailer.createTransport({
    service: config.mailer.service,
    auth: {
        user: config.mailer.user,
        pass: config.mailer.pass,
    },
});

const translateMail = (data) => new Promise((resolve, reject) => {
    const { contactData, item } = data;
    const {
        title, company, team, name, email, number, faxnumber, content,
    } = contactData;
    const { glass, expendable } = item;

    const mailOptions = {
        from: 'FROM < hyunt0413@naver.com >',
        to: 'hyunt0413@gmail.com',
        subject: 'This is title',
        html: '<p>This is paragraph.</p>',
        // text,
    };

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log('failed... => ', err);
            reject(err);
        } else {
            console.log('succeed... => ', res);
            resolve(res);
        }

        transporter.close();
    });
});

module.exports.translateMail = translateMail;
