import nodemailer from 'nodemailer'



const mailSender = process.env.MAIL_SENDER
const mailPass = process.env.MAIL_PASS
const mailToken = process.env.MAIL_TOKEN

 const transporter = nodemailer.createTransport(
    {
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            type:"OAuth2",
            user:mailSender,
            accessToken:mailToken
        }
    }
)


function createMessageObject(emailToBeSendedTo:string,subject:string,messageText:string){
    const messageObject = {
        from:mailSender,
        to:emailToBeSendedTo,
        subject:subject,
        text:messageText
    }

    return messageObject
}

function sendEmail(emailToBeSendedTo:string,subject:string,messageText:string){
    const messageObject = createMessageObject(emailToBeSendedTo,subject,messageText)

    transporter.sendMail(messageObject, (error) => {
        throw error
    })
}

export {
    createMessageObject,
    sendEmail
}