import { zabo } from "../modules/zabo";
import { Router } from 'express';

const router = Router()
router.get('/currencies/getList', async (req, res) => {
  const _zabo = await zabo()
  const limit = req.query['limit'] ? Number(req.query['limit']) : undefined
  const cursor = req.query['cursor'] ? req.query['cursor'].toString() : ''

  _zabo.currencies.getList({
    cursor,
    limit,
  }).then((resp) => {
    res.json({
      resp,
      error: '',
    })
  }).catch((err) => {
    res.json({
      resp: {},
      err,
    })
  })
})

router.get('/currencies/getOne', async (req, res) => {
  const _zabo = await zabo()

  _zabo.currencies.getOne('ETH').then((resp) => {
    res.json({
      resp,
      error: ''
    })
  }).catch((err) => {
    res.json({
      resp: {},
      error: err
    })
  })
})

router.get('/currencies/getExchangeRates', async (req, res) => {
  const _zabo = await zabo()

  _zabo.currencies.getExchangeRates({
    tickers: ['BTC', 'ETH'],
  })
    .then((resp) => {
      res.json({
        resp,
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