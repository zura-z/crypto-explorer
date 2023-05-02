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
      <div>
        <div>
          <h2>Market Update</h2>

          <div>
            <table className={styles.ChartContainer}>
              <thead>
                <tr>
                  <th scope="col">#</th>

                  <th scope="col">Name</th>

                  <th scope="col">Price</th>

                  <th scope="col">1h %</th>

                  <th scope="col">24h %</th>

                  <th scope="col">7d %</th>

                  <th scope="col">Market Cap</th>

                  <th scope="col">Volume(24h)</th>

                  <th scope="col">Circulating Supply</th>
                </tr>
              </thead>

              <tbody>
                {data &&
                  data.data?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button>FAV</button>
                      </td>

                      <th scope="row">{item.cmc_rank}</th>

                      <td>
                        <div>
                          <h3>
                            <a href="#">
                              {item.name} <span class="span">{item.symbol}</span>
                            </a>
                          </h3>
                        </div>
                      </td>

                      <td>${item.quote.USD.price.toFixed(2)}</td>

                      <td>{item.quote.USD.percent_change_1h.toFixed(2)}</td>

                      <td>{item.quote.USD.percent_change_24h.toFixed(2)}</td>

                      <td>{item.quote.USD.percent_change_7d.toFixed(2)}</td>

                      <td>${item.quote.USD.market_cap.toFixed(0)}</td>

                      <td>${item.quote.USD.volume_24h.toFixed(0)}</td>

                      <td>
                        {item.total_supply.toFixed()} {item.symbol}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
