const nodemailer = require('nodemailer');

const config = require('./mail.config');

const SEND_TO_MAIL = '733@hanmail.net';

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
        title, company, team, name, email, number, faxNum, content,
    } = contactData;
    const { glass, expendable } = item;

    const mailOptions = {
        from: 'FROM < hyunt0413@naver.com >',
        to: 'hyunt0413@gmail.com',
        subject: '견적 문의',
        html: `<div><p>제목: ${title}</p></div>
               <div>회사: ${company}</div>
               <div>부서: ${team}</div>
               <div>담당자: ${name}</div>
               <div>이메일: ${email}</div>
               <div>전화번호: ${number}</div>
               <div>팩스: ${faxNum}</div>
               <div>내용: ${content}</div>`,
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
