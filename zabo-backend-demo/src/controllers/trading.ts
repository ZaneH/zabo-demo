import { Router } from 'express'
import { zabo } from '../modules/zabo'

/**
 * *Trading isn't available on Node*
 */

const router = Router()
router.get('/trading/getSymbols', async (req, res) => {
  const _zabo = await zabo()

  try {
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
  } catch (e) {
    console.error("Trading API isn't available. (Client-side only)")
  }
})

export default router