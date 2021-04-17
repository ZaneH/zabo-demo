const { zabo } = require("../modules/zabo");

const router = require("express").Router();

router.get("/balances/:address", async (res, resp) => {
  const _zabo = await zabo();
  const address = res.params["address"];

  _zabo.blockchains
    .getBalances("ethereum", address)
    .then((transactions) => {
      resp.send({
        balances: transactions.data,
        error: "",
      });
    })
    .catch((err) => {
      resp.send({
        balances: [],
        error: err,
      });
    });
});

module.exports = router;
