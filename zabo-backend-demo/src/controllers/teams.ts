import { Router } from 'express'
import { zabo } from '../modules/zabo'

const router = Router()
router.get('/teams/getTeam', async (req, res) => {
  const _zabo = await zabo()

  _zabo.getTeam().then((team) => {
    res.json({
      resp: team,
      error: ''
    })
  }).catch((err) => {
    res.json({
      resp: {},
      error: err
    })
  })
})

export default router