import styles from "./Chart.module.css";

import useIntervaledFetch from "../hooks/useIntervaledFetch";

export default function Chart() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_ENDPOINT =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  const options = {
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
      Accept: "application/json",
      "Accept-Encoding": "deflate, gzip",
    },
  };

  const data = useIntervaledFetch(API_ENDPOINT, options);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <table className={styles.Table}>
        <thead>
          <tr className={`${styles.Row} ${styles.Title}`}>
            <th className={styles.Heading}></th>

            <th className={styles.Heading} scope="col">
              #
            </th>

            <th className={`${styles.Heading} ${styles.Name}`} scope="col">
              Name
            </th>

            <th className={styles.Heading} scope="col">
              Price
            </th>

            <th className={styles.Heading} scope="col">
              1h %
            </th>

            <th className={styles.Heading} scope="col">
              24h %
            </th>

            <th className={styles.Heading} scope="col">
              7d %
            </th>

            <th className={styles.Heading} scope="col">
              Market Cap
            </th>

            <th className={styles.Heading} scope="col">
              Volume(24h)
            </th>

            <th className={styles.Heading} scope="col">
              Circulating Supply
            </th>

            <th className={styles.Heading}></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.data?.map((item) => {
              const class1h =
                item.quote.USD.percent_change_1h > 0 ? styles.Up : styles.Down;
              const class24h =
                item.quote.USD.percent_change_24h > 0 ? styles.Up : styles.Down;
              const class7d =
                item.quote.USD.percent_change_7d > 0 ? styles.Up : styles.Down;

              return (
                <tr key={item.id} className={styles.DataRow}>
                  <td className={styles.Data}>
                    <span className="ion-ios-star-outline" />
                  </td>

                  <th className={styles.Data} scope="row">
                    {item.cmc_rank}
                  </th>

                  <td className={styles.Data}>
                    <div>
                      <h3>
                        <a href="#" className={styles.CoinName}>
                          {item.name} <span className={styles.Symbol}>{item.symbol}</span>
                        </a>
                      </h3>
                    </div>
                  </td>

                  <td className={styles.Data}>${item.quote.USD.price.toFixed(2)}</td>

                  <td className={`${styles.Data} ${class1h}`}>
                    <span className={`${class1h == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"}`}>
                      &nbsp;{item.quote.USD.percent_change_1h.toFixed(2)}%
                    </span>
                  </td>

                  <td className={`${styles.Data} ${class24h}`}>
                    <span className={`${class24h == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"}`}>
                      &nbsp;{item.quote.USD.percent_change_24h.toFixed(2)}%
                    </span>
                  </td>

                  <td className={`${styles.Data} ${class7d}`}>
                    <span className={`${class7d == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"}`}>
                      &nbsp;{item.quote.USD.percent_change_7d.toFixed(2)}%
                    </span>
                  </td>

                  <td className={styles.Data}>${item.quote.USD.market_cap.toFixed(0)}</td>

                  <td className={styles.Data}>${item.quote.USD.volume_24h.toFixed(0)}</td>

                  <td className={styles.Data}>
                    {item.total_supply.toFixed(0)} {item.symbol}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}
