import { isRouteErrorResponse, useParams } from "react-router-dom";

import useIntervaledFetch from "../../hooks/useIntervaledFetch";
import { ENDPOINT_WITH_COIN_SYMBOL, OPTIONS } from "./../../API_SETTINGS";
import { useEffect, useState } from "react";

export default function CoinPage() {
  const { slug } = useParams();

  const data = useIntervaledFetch(ENDPOINT_WITH_COIN_SYMBOL(slug), OPTIONS);
  const [iterableData, setItarableData] = useState(null);

  useEffect(() => {
    const coin = data?.data;

    if (coin) {
      const result = Object.keys(coin).map((key) => {
        return { id: key, ...coin[key] };
      });

      setItarableData(result);
      return;
    }
  }, [data]);

  return (
    <div>
      {iterableData?.map((item) => {
        return (
          <>
            <p>
              {item.id} : {item.name} : {item.symbol} : {item.slug}
            </p>

            <br />

            <p>{item.description}</p>
          </>
        );
      })}
    </div>
  );
}
