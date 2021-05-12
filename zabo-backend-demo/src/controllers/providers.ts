import { Router } from 'express'
import { zabo } from '../modules/zabo'

const router = Router()
router.get('/providers/getList', async (req, res) => {
  const _zabo = await zabo()
  const limit = req.query['limit'] ? Number(req.query['limit']) : undefined
  const cursor = req.query['cursor'] ? req.query['cursor'].toString() : ''

  _zabo.providers.getList({
    limit,
    cursor,
  }).then((resp) => {
    res.json({
      resp,
      error: '',
    })
  }).catch((err) => {
    res.json({
      resp: {},
      error: '',
    })
  })
})

router.get('/providers/getOne', async (req, res) => {
  const _zabo = await zabo()

  _zabo.providers.getOne('metamask').then((resp) => {
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