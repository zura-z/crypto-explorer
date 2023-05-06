import { useState } from "react";

import { sortByRank, sortByName, sortByPrice, sortBy1H, sortBy24H, sortBy7D, sortByMarketCap, sortByTotalSupply, sortByVolume } from "../functions/sortFunctions";

export default function useSort(data) {
  const [sortedData, setSortedData] = useState(null);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const handleSort = (event) => {
    setAscendingOrder(true);

    if (event == "rank") {
      const sortedArr = sortByRank(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "name") {
      const sortedArr = sortByName(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "price") {
      const sortedArr = sortByPrice(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "1h") {
      const sortedArr = sortBy1H(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "24h") {
      const sortedArr = sortBy24H(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "7d") {
      const sortedArr = sortBy7D(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "market_cap") {
      const sortedArr = sortByMarketCap(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "volume") {
      const sortedArr = sortByVolume(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    if (event == "total_supply") {
      const sortedArr = sortByTotalSupply(data.data, ascendingOrder);
      setSortedData({ data: sortedArr });
    }

    setAscendingOrder(!ascendingOrder);
  };

  return [sortedData, handleSort];
}
