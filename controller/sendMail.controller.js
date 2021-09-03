ClientID = process.env.ClientID 
ClientSecret = process.env.ClientSecret 
RedirectURL = process.env.RedirectURL 
RefreshToken = process.env.RefreshToken 

const { google } = require("googleapis") 
const nodemailer = require("nodemailer") 

const authentication = new google.auth.OAuth2(ClientID,ClientSecret,RedirectURL) 

authentication.setCredentials({ refresh_token: RefreshToken }) 

async function sendMail(email, verficationCode) {
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
            subject: "Registration Code",
            text: vfCode,
            html:
                " <b>Congratulations!<br> <p> You have been selected to participate in ICT Fest 2021.<h4>Registration code<b> :</h4><h1><t>" +
                vfCode +
                "</h1> <t><br><p>ICT FEST Comittee</p><br><p>Best Wishes</p></b>",
        } 
        const result = await transport.sendMail(mailOptions) 
        return result 
    } catch (error) {
        return error 
    }
}

module.exports = sendMail