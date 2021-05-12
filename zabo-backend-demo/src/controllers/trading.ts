import { Router } from 'express'
import { zabo } from '../modules/zabo'

/**
 * *Trading isn't available on Node*
 */

const router = Router()
router.get('/trading/getSymbols', async (req, res) => {
  const _zabo = await zabo()

  console.log(_zabo)
  _zabo.trading.getSymbols().then((resp) => {
    res.json({
      resp,
      error: ''
    })
  }).catch((err) => {
    res.json({
      resp: {},
      error: ''
    })
  })
})

export default router