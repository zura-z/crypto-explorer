import useIntervaledFetch from "../hooks/useIntervaledFetch";
import { ENDPOINT_WITH_LIMIT, OPTIONS } from "./API_SETTINGS";

import Head from "./Table/Head";
import Body from "./Table/Body";

import styles from "./Chart.module.css";

export default function Chart() {
  const data = useIntervaledFetch(ENDPOINT_WITH_LIMIT(3), OPTIONS);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <table className={styles.Table}>
        <Head />
        <Body data={data} />
      </table>
    </section>
  );
}
