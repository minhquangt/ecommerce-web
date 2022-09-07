const nodemailer = require('nodemailer');

const emailCtrl = {
    sendEmail: async(req, res) => {
        const data = req.body;
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'qtranminh77@gmail.com', // generated ethereal user
                pass: 'jmbfomthafllobuc', // generated ethereal password
            },
        });
        try {
            await transporter.sendMail({
                from: 'qtranminh77@gmail.com', // sender address
                to: data.email, // list of receivers
                subject: data.name, // Subject line
                html: `
                <div>
                    <h1>Hello, ${data.name}. We have received a message from you.</h1>
                    <p>Message: ${data.message}</p>
                    <i>We will respond to you as soon as possible.</i>
                </div>`, // html body
            });
            res.status(200).send({
                msg: 'Submitted successfully. We will try to contact you as soon as possible.',
            });
        } catch (error) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = emailCtrl;