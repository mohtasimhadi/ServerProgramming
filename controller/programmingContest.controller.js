const ProgrammingContest = require("../models/ProgrammingContest.model")
const sendMail = require("./sendMail.controller.js")
const crypto = require('crypto')

let regID = crypto.randomBytes(20).toString('hex')

const getRegisterID = () => {
    ProgrammingContest.findOne({ registerID: regID }).then((participant) => {
        if (participant) {
            regID = crypto.randomBytes(20).toString('hex')
            getRegisterID()
        }
    })
}

const getPC = (req, res) => {
    getRegisterID()
    res.render("programming-contest/register.ejs", {
        error: req.flash("error"),
    })
}

const postPC = (req, res) => {
    const { teamName, institutionName, coachName, coachContact, coachEmail, coachTshirt, leaderName, leaderContact, leaderEmail, leaderTshirt, member1Name, member1Contact, member1Email, member1Tshirt, member2Name, member2Contact, member2Email, member2Tshirt, } = req.body
    let registerID = regID
    const registrationFee = 2000
    const total = registrationFee
    const paid = 0
    const selected = false

    let error = ""

    ProgrammingContest.findOne({ teamName: teamName, coachName: coachName, }).then((programmingTeam) => {
        if (programmingTeam) {
            error = "Team already exists!"
            req.flash("error", error)
            res.redirect("/ProgrammingContest/register")
        } else {
            const programmingTeam = new ProgrammingContest({ teamName, registerID, institutionName, coachName, coachContact, coachEmail, coachTshirt, leaderName, leaderContact, leaderEmail, leaderTshirt, member1Name, member1Contact, member1Email, member1Tshirt, member2Name, member2Contact, member2Email, member2Tshirt, total, paid, selected, })
            programmingTeam.save().then(() => {
                sendMail(coachEmail, registerID, "Programming Contest", teamName)
                console.log(registerID)
                error = "Team has been registered successfully!"
                req.flash("error", error)
                res.redirect("/ProgrammingContest/register")
            }).catch(() => {
                error = "An unexpected error occured while registering participant"
                req.flash("error", error)
                res.redirect("/ProgrammingContest/register")
            })
        }
    })
}

const getPCList = (req, res) => {
    let all_programmingTeam = []
    let error = ""
    ProgrammingContest.find().then((data) => {
        all_programmingTeam = data
        res.render("programming-contest/list.ejs", {
            error: req.flash("error"),
            programmingTeam: all_programmingTeam,
        })
    }).catch(() => {
        error = "Failed to retrieve data!"
        res.render("programming-contest/list.ejs", {
            error: req.flash("error", error),
            programmingTeam: all_programmingTeam,
        })
    })
}

const deletePC = (req, res) => {
    let error = ""

    ProgrammingContest.deleteOne({ _id: req.params.id }).then(() => {
        let error = "Data has been deleted successfully!"
        req.flash("error", error)
        res.redirect("/ProgrammingContest/list")
    }).catch(() => {
        let error = "Failed to delete data"
        req.flash("error", error)
        res.redirect("/ProgrammingContest/list")
    })
}

const paymentDonePC = (req, res) => {
    const id = req.params.id

    ProgrammingContest.findOne({ _id: id }).then((programmingTeam) => {
        programmingTeam.paid = programmingTeam.total
        programmingTeam.save().then(() => {
            let error = "Payment completed successfully!"
            req.flash("error", error)
            res.redirect("/ProgrammingContest/list")
        }).catch(() => {
            let error = "Data could not be updated!"
            req.flash("error", error)
            res.redirect("/ProgrammingContest/list")
        })
    }).catch(() => {
        let error = "Data could not be updated!"
        req.flash("error", error)
        res.redirect("/ProgrammingContest/list")
    })
}

const selectPC = (req, res) => {
    const id = req.params.id

    ProgrammingContest.findOne({ _id: id }).then((programmingTeam) => {
        programmingTeam.selected = true
        programmingTeam.save().then(() => {
            let error = "Participant has been selected successfully!"
            req.flash("error", error)
            res.redirect("/ProgrammingContest/list")
        }).catch(() => {
            let error = "Data could not be updated!"
            req.flash("error", error)
            res.redirect("/ProgrammingContest/list")
        })
    }).catch(() => {
        let error = "Data could not be updated!"
        req.flash("error", error)
        res.redirect("/ProgrammingContest/list")
    })
}

const getEditMO = (req, res) => {
    const id = req.params.id
    let info = []
    MathOlympiad.findOne({ _id: id }).then((data) => {
        info = data
        res.render("math-olympiad/editParticipant.ejs", {
            error: req.flash("error"),
            participant: info,
        })
    }).catch((e) => {
        console.log(e)
        error = "Failed to fetch participants"
        res.render("math-olympiad/editParticipant.ejs", {
            error: req.flash("error", error),
            participant: info,
        })
    })
}

const postEditMO = async (req, res) => {
    let registrationFee = 0
    const { name, contact, category, email, institution, tshirt } = req.body
    switch(category){
        case "School":
            registrationFee = 250
            break
        case "College":
            registrationFee = 400
            break
        default:
            registrationFee = 500
            break
    }
    const total = registrationFee
    const data = await MathOlympiad.findOneAndUpdate({ name: name, contact: contact }, { category, email, institution, tshirt, total })
    if (data) {
        console.log("findOneAndUpdate ", data)
        res.redirect("/MathOlympiad/list")
    }
}
module.exports = { getPC, postPC, getPCList, deletePC, paymentDonePC, selectPC, postEditMO, getEditMO, }