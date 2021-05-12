import { Router } from 'express'
import { zabo } from '../modules/zabo'

const router = Router()
router.get('/transactions/getList', async (req, res) => {
  const _zabo = await zabo()
  const limit = req.query['limit'] ? Number(req.query['limit']) : undefined
  const cursor = req.query['cursor'] ? req.query['cursor'].toString() : ''

  _zabo.transactions.getList({
    userId: '5e78697b-1262-4f72-9806-9fc93c1fa81f',
    accountId: 'b293f2b1-f573-4a47-bebf-993781955603',
    limit,
    cursor,
  }).then((resp) => {
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

router.get('/transactions/getOne', async (req, res) => {
  const _zabo = await zabo()

  _zabo.transactions.getOne({
    txId: '0x1d89048fec6f0a62be8a964d5ba0effca62dcd71a13885848e8770df5819c248',
    userId: '5e78697b-1262-4f72-9806-9fc93c1fa81f',
    accountId: 'b293f2b1-f573-4a47-bebf-993781955603'
  }).then((tx) => {
    res.json({
      resp: tx,
      error: '',
    })
  }).catch((err) => {
    res.json({
      resp: {},
      error: err,
    })
  })
})

export default router