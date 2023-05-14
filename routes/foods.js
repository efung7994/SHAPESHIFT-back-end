import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as foodsCtrl from '../controllers/foods.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', foodsCtrl.getFoodData)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }