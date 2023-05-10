export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_ENDPOINT =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export const ENDPOINT_WITH_LIMIT = (limit = 10) => `${API_ENDPOINT}?limit=${limit}`;

export const API_ENDPOINT_COIN = 
`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info`;
  
export const ENDPOINT_WITH_COIN_SYMBOL = (slug) => `${API_ENDPOINT_COIN}?slug=${slug}`;

export const OPTIONS = {
  headers: {
    "X-CMC_PRO_API_KEY": API_KEY,
    Accept: "application/json",
    "Accept-Encoding": "deflate, gzip",
  },
};
