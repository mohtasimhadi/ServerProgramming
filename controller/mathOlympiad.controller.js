const MathOlympiad = require('../models/MathOlympiad.model')

const getMO = (req, res) => {
    res.render('math-olympiad/register.ejs', { error: req.flash("error")})
}

const postMO = (req, res) => {
    const {name, category, contact, email, institution, tshirt} = req.body
    console.log(name, category, contact, email, institution, tshirt)

    let registrationFee = 0
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
    const paid = 0
    const selected = false

    let error = ""

    MathOlympiad.findOne({name: name, contact: contact}).then((participant) => {
        if (participant){
            error = "Participant with this name and contact number already exists!"
            req.flash('error', error)
            res.redirect('register')
        } else{
            const participant = new MathOlympiad({
                name, registerID, category, contact, email, institution, paid, total, selected, tshirt
            })
            participant.save().then((error = 'Participant has been registered successfully!')=>{
                req.flash('error', error)
                res.redirect('register')
            }).catch(()=>{
                error='An unexpected error occured while registering the participant!'
            })
        }
    })
}

const getMOList = (req, res) => {
    let all_participant = []
    let error = ""
    MathOlympiad.find()
        .then((data) => {
            all_participant = data;
            res.render("math-olympiad/list.ejs", {
                error: req.flash("error"),
                participants: all_participant,
            })
        })
        .catch(() => {
            error = "Failed to retrieve data!"
            res.render("math-olympiad/list.ejs", {
                error: req.flash("error", error),
                participants: all_participant,
            })
        })
}

const deleteMO = (req, res) => {
    let error = ""
    MathOlympiad.deleteOne({ _id: req.params.id }).then(() => {
            let error = "Data has been deleted successfully!"
            req.flash("error", error)
            res.redirect("/MathOlympiad/list")
        }).catch(() => {
            let error = "Failed to delete data"
            req.flash("error", error)
            res.redirect("/MathOlympiad/list")
        })
}

module.exports = {getMO, postMO, getMOList, deleteMO}