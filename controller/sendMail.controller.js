ClientID = process.env.ClientID 
ClientSecret = process.env.ClientSecret 
RedirectURL = process.env.RedirectURL 
RefreshToken = process.env.RefreshToken 

const { google } = require("googleapis") 
const nodemailer = require("nodemailer") 

const authentication = new google.auth.OAuth2(ClientID,ClientSecret,RedirectURL) 

authentication.setCredentials({ refresh_token: RefreshToken }) 

async function sendMail(email, verficationCode, contest, name) {
    try {
        vfCode = verficationCode.toString() 
        console.log(verficationCode) 
        const AccessToken = await authentication.getAccessToken() 
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "mohtasimhadi@iut-dhaka.edu",
                clientId: ClientID,
                clientSecret: ClientSecret,
                refreshToken: RefreshToken,
                accessToken: AccessToken,
            },
            tls: {
                rejectUnauthorized: false,
            },
        }) 

        const mailOptions = {
            from: "ICT Fest 2021<mohtasimhadi@iut-dhaka.edu>",
            to: email,
            subject: "ICT Fest 2021: "+contest+" - Registration Successful!",
            text: vfCode,
            text: `Congratulations ${name}!,
                You have successfully registered to IUT ICT Fest Math Olympiad! Your confirmation code is ${vfCode}`
        } 
        const result = await transport.sendMail(mailOptions) 
        return result 
    } catch (error) {
        return error 
    }
}

module.exports = sendMail