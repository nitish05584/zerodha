const express = require("express");
const router = express.Router();

router.get("/summary", async (req, res) => {
  try {
    return res.status(200).json({
      user: "User",
      marginAvailable: "3.74k",
      marginsUsed: 0,
      openingBalance: "3.74k",
      holdings: {
        count: 13,
        currentValue: "31.43k",
        investment: "29.88k",
        pnl: "1.55k",
        pnlPercent: 5.2,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/orders", async (req, res) => {
  return res.status(200).json({
    message: "You haven't placed any orders today",
    orders: [],
  });
});

router.get("/holdings", async (req, res) => {
  return res.status(200).json([
    { symbol: "TCS", qty: 20, avg: 3450, ltp: 3615, pnl: 3300 },
    { symbol: "INFY", qty: 35, avg: 1425, ltp: 1490, pnl: 2275 },
    { symbol: "RELIANCE", qty: 10, avg: 2820, ltp: 2910, pnl: 900 },
    { symbol: "HDFCBANK", qty: 15, avg: 1680, ltp: 1715, pnl: 525 },
  ]);
});

router.get("/positions", async (req, res) => {
  return res.status(200).json([
    { symbol: "NIFTY 50", qty: 1, side: "Buy", ltp: 24580, pnl: 220 },
    { symbol: "BANKNIFTY", qty: 2, side: "Sell", ltp: 52840, pnl: -380 },
    { symbol: "TCS", qty: 5, side: "Buy", ltp: 3615, pnl: 520 },
  ]);
});

router.get("/funds", async (req, res) => {
  return res.status(200).json({
    availableMargin: "4,043.10",
    usedMargin: "3,757.30",
    availableCash: "4,043.10",
    openingBalance: "4,043.10",
    payin: "4064.00",
    span: "0.00",
    deliveryMargin: "0.00",
    exposure: "0.00",
    optionsPremium: "0.00",
    collateralLiquid: "0.00",
    collateralEquity: "0.00",
    totalCollateral: "0.00",
  });
});

module.exports = router;
