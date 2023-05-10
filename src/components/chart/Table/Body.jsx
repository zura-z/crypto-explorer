import styles from "../Chart.module.css";

import { addCommas } from "../../../functions/addCommas";
import { removeDash } from "../../../functions/removeDash";
import { Link } from "react-router-dom";

export default function Body({ data }) {
  return (
    <tbody>
      {data &&
        data.data?.map((item) => {
          const class1h = item.quote.USD.percent_change_1h > 0 ? styles.Up : styles.Down;
          const class24h =
            item.quote.USD.percent_change_24h > 0 ? styles.Up : styles.Down;
          const class7d = item.quote.USD.percent_change_7d > 0 ? styles.Up : styles.Down;

          return (
            <tr key={item.id} className={styles.DataRow}>
              <td className={styles.Data}>
                <span className="ion-ios-star-outline" />
              </td>

              <td className={styles.Data} scope="row">
                {item.cmc_rank}
              </td>

              <td className={styles.Data}>
                <Link to={`/${item.slug}`} className={styles.CoinName}>
                  {item.name} <span className={styles.Symbol}>{item.symbol}</span>
                </Link>
              </td>

              <td className={styles.Data}>
                ${addCommas(item.quote.USD.price.toFixed(2))}
              </td>

              <td className={`${styles.Data} ${class1h}`}>
                <span
                  className={`${
                    class1h == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"
                  }`}
                >
                  &nbsp;{removeDash(item.quote.USD.percent_change_1h.toFixed(2))}%
                </span>
              </td>

              <td className={`${styles.Data} ${class24h}`}>
                <span
                  className={`${
                    class24h == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"
                  }`}
                >
                  &nbsp;{removeDash(item.quote.USD.percent_change_24h.toFixed(2))}%
                </span>
              </td>

              <td className={`${styles.Data} ${class7d}`}>
                <span
                  className={`${
                    class7d == styles.Up ? "ion-ios-arrow-up" : "ion-ios-arrow-down"
                  }`}
                >
                  &nbsp;{removeDash(item.quote.USD.percent_change_7d.toFixed(2))}%
                </span>
              </td>

              <td className={styles.Data}>
                ${addCommas(item.quote.USD.market_cap.toFixed(0))}
              </td>

              <td className={styles.Data}>
                ${addCommas(item.quote.USD.volume_24h.toFixed(0))}
              </td>

              <td className={styles.Data}>
                {addCommas(item.total_supply.toFixed(0))} {item.symbol}
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
