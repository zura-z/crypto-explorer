import { useState, useEffect } from 'react';

export default function useIntervaledFetch(url, options, interval = 60000) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();

    const intervalId = setInterval(() => fetchData(), interval);

    return () => clearInterval(intervalId);
  }, [url, interval]);

  return data;
}