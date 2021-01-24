const ccxt = require('ccxt');
const settings = require('../../settings/config');

const ftx = new ccxt.ftx({
  apiKey: settings.ftx.apiKey,
  secret: settings.ftx.apiKey,
  options: { defaultType: 'future' }
});

exports.markets = async (req, res) => {
  try {
    const ftxMarkets = await ftx.fetchMarkets();
    res.status(200).json(ftxMarkets);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: 'INTERNAL ERROR' });
  }
};

exports.ticker = async (req, res) => {
  try {
    const ftxTicker = await ftx.fetchTicker('BTC-PERP');
    res.status(200).json(ftxTicker);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: 'INTERNAL ERROR' });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const binanceCreatedOrder = await ftx.createOrder(
      'ADA-PERP',
      'market',
      'sell',
      '1'
    );
    res.status(200).json(binanceCreatedOrder);
  } catch (e) {
    console.log(e);
    res.status(500).json({ e });
  }
};

exports.postLeverage = async (req, res) => {
  try {
    const ftxLevaregePost = await ftx.privatePostAccountLeverage({
      leverage: 5
    });
    res.status(200).json(ftxLevaregePost);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
