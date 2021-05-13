import { zabo } from "../modules/zabo";
import { Router } from "express";

const router = Router()
router.get('/blockchains/getBlock', async (req, res) => {
  const _zabo = await zabo();
  const block = req.query['block'] ? Number(req.query['block']) : undefined

  _zabo.blockchains.getBlock('ethereum', block ?? 200).then((resp) => {
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

router.get('/blockchains/getBalances', async (req, res) => {
  const _zabo = await zabo()
  const address = '0xcf741a54fcf72607d8185ee15914430e420bd41c'

  _zabo.blockchains
    .getBalances('ethereum', address)
    .then((resp) => {
      res.send({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.send({
        resp: {},
        error: err
      })
    })
})

router.get('/blockchains/getContract', async (req, res) => {
  const _zabo = await zabo()
  const address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D' // Uniswap

  _zabo.blockchains
    .getContract('ethereum', address)
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err
      })
    })
})

router.get('/blockchains/getTokens', async (req, res) => {
  const _zabo = await zabo()

  _zabo.blockchains
    .getTokens('ethereum', 'UNI')
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        res: {},
        error: err
      })
    })
})

router.get('/blockchains/getTransactions', async (req, res) => {
  const _zabo = await zabo()

  _zabo.blockchains
    .getTransactions('ethereum', '0xcf741a54fcf72607d8185ee15914430e420bd41c')
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err
      })
    })
})

router.get('/blockchains/getTransaction', async (req, res) => {
  const _zabo = await zabo()

  _zabo.blockchains
    .getTransaction('ethereum', '0x3c8255b5888a6c6f32b24ad8822a9465b466d078e7d768a99a1421377a01558f')
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err
      })
    })
})

router.get('/blockchains/getTokenTransfers', async (req, res) => {
  const _zabo = await zabo()

  _zabo.blockchains
    .getTokenTransfers('ethereum', '0xcf741a54fcf72607d8185ee15914430e420bd41c')
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err
      })
    })
})

router.get('/blockchains/getTokenTransfer', async (req, res) => {
  const _zabo = await zabo()

  _zabo.blockchains
    .getTokenTransfer('ethereum', '0x4d4e4f76c819b3baceee5193f11cad3df879d4c732b4e48c20e1a38d2c847c36')
    .then((resp) => {
      res.json({
        resp,
        error: ''
      })
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err
      })
    })
})

export default router