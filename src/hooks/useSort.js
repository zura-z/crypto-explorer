import { useState } from "react";

export default function useSort(data) {
  const [sortedData, setSortedData] = useState(null);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const sortBy = (key) => {
    return (a, b) => {
      let valueA = a;
      let valueB = b;
      const keys = key.split(".");
      for (const k of keys) {
        valueA = valueA[k];
        valueB = valueB[k];
      }
      const diff = valueA - valueB;
      return ascendingOrder ? diff : -diff;
    };
  };

  const handleSort = (event) => {
    setAscendingOrder(!ascendingOrder);

    let sortingFunction;
    switch (event) {
      case "rank":
        sortingFunction = sortBy("cmc_rank");
        break;
      case "name":
        sortingFunction = sortBy("name");
        break;
      case "price":
        sortingFunction = sortBy("quote.USD.price");
        break;
      case "1h":
        sortingFunction = sortBy("quote.USD.percent_change_1h");
        break;
      case "24h":
        sortingFunction = sortBy("quote.USD.percent_change_24h");
        break;
      case "7d":
        sortingFunction = sortBy("quote.USD.percent_change_7d");
        break;
      case "market_cap":
        sortingFunction = sortBy("quote.USD.market_cap");
        break;
      case "volume":
        sortingFunction = sortBy("quote.USD.volume_24h");
        break;
      case "total_supply":
        sortingFunction = sortBy("total_supply");
        break;
      default:
        return;
    }

    const sortedArr = data.data.slice().sort(sortingFunction);
    setSortedData({ data: sortedArr });
  };

  return [sortedData, handleSort];
}
