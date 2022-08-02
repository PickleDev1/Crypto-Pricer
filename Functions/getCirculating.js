const CoinMarketCap = require('coinmarketcap-api')
axios.get('website.com')
const apiKey = '68da4c90-613d-4068-8f6d-0e7dfeff457c'
const client = new CoinMarketCap(apiKey)
async function getCirculating(symbol) {
const btc= await client.getQuotes({symbol:symbol}).catch(console.error)
if(!btc) {
    return console.error(`The symbol ${symbol} is not undefined`)
}
const quotes1 = btc.data
const USD = quotes1[Object.keys(quotes1)[0]]
/**
 *   USD: {
    price: 23207.344976320368,
    volume_24h: 28679843716.992115,
    volume_change_24h: 2.7105,
    percent_change_1h: -0.81932044,
    percent_change_24h: 1.07277142,
    percent_change_7d: 10.80304095,
    percent_change_30d: 20.97161606,
    percent_change_60d: -21.37595233,
    percent_change_90d: -40.54260413,
    market_cap: 443504105414.0402,
    market_cap_dominance: 41.2468,
    fully_diluted_market_cap: 487354244502.73,
    tvl: null,
    last_updated: '2022-08-02T18:05:00.000Z'
  }
 */
  return USD.circulating_supply
}
getPrice('ETH')
module.exports = getCirculating