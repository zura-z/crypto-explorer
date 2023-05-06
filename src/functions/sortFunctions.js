export function sortByRank(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.cmc_rank - b.cmc_rank;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortByName(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.name.localeCompare(b.name);
    return ascendingOrder ? diff : -diff;
  });
}

export function sortByPrice(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.price - b.quote.USD.price;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortBy1H(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.percent_change_1h - b.quote.USD.percent_change_1h;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortBy24H(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortBy7D(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.percent_change_7d - b.quote.USD.percent_change_7d;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortByMarketCap(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.market_cap - b.quote.USD.market_cap;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortByVolume(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.quote.USD.volume_24h - b.quote.USD.volume_24h;
    return ascendingOrder ? diff : -diff;
  });
}

export function sortByTotalSupply(arr, ascendingOrder) {
  return arr.slice().sort((a, b) => {
    const diff = a.total_supply - b.total_supply;
    return ascendingOrder ? diff : -diff;
  });
}
