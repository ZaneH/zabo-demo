import { Router } from "express";
import { zabo } from "../modules/zabo";

const router = Router();
router.get("/users/getList", async (req, res) => {
  const _zabo = await zabo();
  const limit = req.query["limit"] ? Number(req.query["limit"]) : undefined;
  const cursor = req.query["cursor"] ? req.query["cursor"].toString() : "";

  _zabo.users
    .getList({
      limit,
      cursor,
    })
    .then((resp) => {
      res.json({
        resp,
        error: "",
      });
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: "",
      });
    });
});

router.get("/users/getOne", async (req, res) => {
  const _zabo = await zabo();

  _zabo.users
    .getOne("5e78697b-1262-4f72-9806-9fc93c1fa81f")
    .then((resp) => {
      res.json({
        resp,
        error: "",
      });
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: "",
      });
    });
});

router.get("/users/createDepositAddress", async (req, res) => {
  const _zabo = await zabo();

  _zabo.users
    .createDepositAddress({
      userId: "5e78697b-1262-4f72-9806-9fc93c1fa81f",
      accountId: "b293f2b1-f573-4a47-bebf-993781955603",
      ticker: "ETH",
    })
    .then((resp) => {
      res.json({
        resp,
        error: "",
      });
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err,
      });
    });
});

router.get("/users/getDepositAddress", async (req, res) => {
  const _zabo = await zabo();

  _zabo.users.getDepositAddresses({
    userId: "5e78697b-1262-4f72-9806-9fc93c1fa81f",
    accountId: "b293f2b1-f573-4a47-bebf-993781955603",
    ticker: "ETH",
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
  });
});

router.get("/users/getBalances", async (req, res) => {
  const _zabo = await zabo();

  _zabo.users
    .getBalances({
      userId: "5e78697b-1262-4f72-9806-9fc93c1fa81f",
      accountId: "b293f2b1-f573-4a47-bebf-993781955603",
    })
    .then((resp) => {
      res.json({
        resp,
        error: "",
      });
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err,
      });
    });
});

router.get("/users/getAccount", async (req, res) => {
  const _zabo = await zabo();

  _zabo.users
    .getAccount({
      userId: "5e78697b-1262-4f72-9806-9fc93c1fa81f",
      accountId: "b293f2b1-f573-4a47-bebf-993781955603",
    })
    .then((resp) => {
      res.json({
        resp,
        error: "",
      });
    })
    .catch((err) => {
      res.json({
        resp: {},
        error: err,
      });
    });
});

export default router;
