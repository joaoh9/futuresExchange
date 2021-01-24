require('dotenv/config');

module.exports = {
  bitmex: {
    apiKey: process.env.BITMEX_API_KEY,
    secret: process.env.BITMEX_SECRET,
  },
  ftx: {
    apiKey: process.env.FTX_API_KEY,
    secret: process.env.FTX_SECRET,
  },
  binance: {
    apiKey: process.env.BINANCE_API_KEY,
    secret: process.env.BINANCE_SECRET,
  },
};
