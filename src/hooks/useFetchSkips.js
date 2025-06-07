import { useEffect, useState } from 'react';

const useFetchSkips = (postcode, area) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postcode || !area) return;

    const controller = new AbortController();
    const fetchSkips = async () => {
      setLoading(true);
      setError(null);

      try {
        const base = import.meta.env.VITE_API_BASE || 'https://app.wewantwaste.co.uk/api';
        const url = `${base}/skips/by-location?postcode=${encodeURIComponent(postcode)}&area=${encodeURIComponent(area)}`;
        const resp = await fetch(url, { signal: controller.signal });
        if (!resp.ok) throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        const json = await resp.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
    return () => controller.abort();
  }, [postcode, area]);

  return { data, loading, error };
};

export default useFetchSkips;