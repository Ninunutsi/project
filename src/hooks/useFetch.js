import { useState, useEffect } from 'react';

const useFetch = (url, page, itemsPerPage) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // მეთოდი დავამატო?
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${url}?_page=${page}&_limit=${itemsPerPage}`);
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url, page, itemsPerPage]);
  
    return { data, loading, error };
};

export default useFetch;
