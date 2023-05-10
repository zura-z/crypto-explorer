import useIntervaledFetch from "../../hooks/useIntervaledFetch";
import useSort from "../../hooks/useSort";

import { ENDPOINT_WITH_LIMIT, OPTIONS } from "./../../API_SETTINGS";

import Head from "./Table/Head";
import Body from "./Table/Body";

import styles from "./Chart.module.css";

import { useState, useEffect, useRef } from "react";

export default function Chart() {
  const [showRowsSelect, setShowRowsSelect] = useState(false);
  const [rows, setRows] = useState(2);

  const [dataKey, setDataKey] = useState("");

  const data = useIntervaledFetch(ENDPOINT_WITH_LIMIT(rows), OPTIONS);

  const [sortedData, handleSort] = useSort(data);

  const handleRowsSelect = () => {
    setShowRowsSelect(!showRowsSelect);
  };

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowRowsSelect(false);
      }
    }

    document.addEventListener("click", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  }, [selectRef]);

  useEffect(() => {
    setDataKey(`${rows}-${data?.length || 0}`);
  }, [rows, data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.Section}>
      <div className={styles.TopOptions}>
        Show rows{" "}
        <div ref={selectRef} className={styles.Button} onClick={handleRowsSelect}>
          <div className="flex">
            {rows}
            <span className="ion-ios-arrow-down" />
          </div>

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
        <Body key={dataKey} data={sortedData || data} />
      </table>
    </section>
  );
}
