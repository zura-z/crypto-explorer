import styles from "../Chart.module.css";


export default function Head({ handleSort }) {

  return (
    <thead>
      <tr className={`${styles.Row} ${styles.Title}`}>
        <th className={styles.Heading}></th>

        <th className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("rank")}>
          #
        </th>

        <th className={`${styles.Heading} ${styles.Name} pointer`} scope="col" onClick={() => handleSort("name")}>
          Name
        </th>

        <th className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("price")}>
          Price
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("1h")}>
          1h %
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("24h")}>
          24h %
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("7d")}>
          7d %
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("market_cap")}>
          Market Cap
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("volume")}>
          Volume(24h)
        </th>

        <th  className={`${styles.Heading} pointer`} scope="col" onClick={() => handleSort("total_supply")}>
          Circulating Supply
        </th>

        <th className={styles.Heading}></th>
      </tr>
    </thead>
  );
}
