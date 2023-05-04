import styles from "../Chart.module.css";

export default function Head() {
  return (
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
  );
}
