import Zabo from 'zabo-sdk-js'

let _zabo: Zabo.SDK
const zabo = async () => {
  if (_zabo && _zabo as Zabo.SDK) return _zabo

  _zabo = await Zabo.init({
    env: 'sandbox',
    apiKey: process.env.ZABO_API_KEY,
    secretKey: process.env.ZABO_SECRET_KEY
  })

  return _zabo
}

export { zabo }
