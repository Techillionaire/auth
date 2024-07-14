// Generate password reset token and send email
// const forgotPassword = asyncHandler(async (req, res) => {
//     const { email } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     // Generate reset token
//     const resetToken = crypto.randomBytes(32).toString('hex');
//     user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//     user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes

//     await user.save();

//     const resetUrl = `${req.protocol}://${req.get('host')}/api/users/reset-password/${resetToken}`;

//     const message = `You are receiving this email because you (or someone else) have requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

//     try {
//         const transporter = nodemailer.createTransport({
//             service: 'Gmail',
//             auth: {
//                 user: process.env.EMAIL_USERNAME,
//                 pass: process.env.EMAIL_PASSWORD,
//             },
//         });

//         await transporter.sendMail({
//             to: user.email,
//             subject: 'Password reset token',
//             text: message,
//         });

//         res.status(200).json({ success: true, data: 'Email sent' });
//     } catch (error) {
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;

//         await user.save();

//         res.status(500);
//         throw new Error('Email could not be sent');
//     }
// });

// const nodemailer = require('nodemailer');

// const sendEmail = async (options) => {
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL_USERNAME,
//             pass: process.env.EMAIL_PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USERNAME,
//         to: options.email,
//         subject: options.subject,
//         text: options.message,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         throw error;
//     }
// };

// module.exports = sendEmail;

// Endpoints to manage a collection of books
// `GET /books`: To retrieve a list of books 
//  `POST /books`: To create a new book 
//  `GET /books/{id}`: To retrieve a specific book by id 
//  `PUT /books`/{id}`: To update a specific book by id 
//  `DELETE /book/{id}`: To delete a specific book by id (without id the entire book in the db will be deleted)

// Endpoints needed to create an ecommerce website that sells shoes 
//  `POST /users`: To create users visiting the site 
// `GET /users{id}`: To retrieve a specific user 
// `GET /products`: To retreive and render shoes to the users 