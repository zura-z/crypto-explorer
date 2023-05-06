import useIntervaledFetch from "../hooks/useIntervaledFetch";
import { ENDPOINT_WITH_LIMIT, OPTIONS } from "./API_SETTINGS";

import Head from "./Table/Head";
import Body from "./Table/Body";

import styles from "./Chart.module.css";

import useSort from "../hooks/useSort";
import { useState } from "react";

export default function Chart() {
  const [showRowsSelect, setShowRowsSelect] = useState(false);
  const [rows, setRows] = useState(100);

  const data = useIntervaledFetch(ENDPOINT_WITH_LIMIT(rows), OPTIONS);

  const [sortedData, handleSort] = useSort(data);

  const handleRowsSelect = () => {
    setShowRowsSelect(!showRowsSelect);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.Section}>
      <div className={styles.Rows}>
        Show rows{" "}
        <div className={styles.Button} onClick={handleRowsSelect}>
          <div className="flex">{rows}<span className="ion-ios-arrow-down" /></div>

          {showRowsSelect && (
            <ul>
              <li onClick={() => setRows(20)}>20</li>
              <li onClick={() => setRows(50)}>50</li>
              <li onClick={() => setRows(100)}>100</li>
            </ul>
          )}
        </div>
      </div>

      <table className={styles.Table}>
        <Head handleSort={handleSort} />
        <Body data={sortedData || data} />
      </table>
    </section>
  );
}
