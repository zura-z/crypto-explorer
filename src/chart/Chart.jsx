import useIntervaledFetch from "../hooks/useIntervaledFetch";
import { ENDPOINT_WITH_LIMIT, OPTIONS } from "./API_SETTINGS";

import Head from "./Table/Head";
import Body from "./Table/Body";

import styles from "./Chart.module.css";

import useSort from '../hooks/useSort'

export default function Chart() {
  const data = useIntervaledFetch(ENDPOINT_WITH_LIMIT(3), OPTIONS);
  
  const [sortedData, handleSort] = useSort(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.Section}>
      <table className={styles.Table}>
        <Head sortPrice={() => handleSort("price")} />
        <Body data={sortedData || data} />
      </table>
    </section>
  );
}
