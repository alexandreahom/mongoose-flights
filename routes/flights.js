import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('/new', flightsCtrl.new)
})

export {
  router
}
