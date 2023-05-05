import { useState } from "react";

export default function useSort(data) {
  const [sortedData, setSortedData] = useState(null);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  function sortByPrice(arr) {
    setAscendingOrder(true);

    arr.sort((a, b) => {
      if (ascendingOrder) {
        return a.quote.USD.price - b.quote.USD.price;
      } else {
        return b.quote.USD.price - a.quote.USD.price;
      }
    });

    setAscendingOrder(!ascendingOrder);
    return arr;
  }

  const handleSort = (event) => {
    if (event == "price") {
      setSortedData({ data: sortByPrice(data.data) });
    }
  };

  return [sortedData, handleSort];
}
