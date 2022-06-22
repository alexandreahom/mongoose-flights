import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    console.log("CREATED FLIGHT:", flight)
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights/new")
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights"
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: "Flight Detail"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newFlight as new,
  index,
  create,
  deleteFlight as delete,
  show,
}