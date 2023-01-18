import {useState, useEffect } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        // An abort controller to abort useFetch when you navigate away from the page
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok)
                    throw Error("Could not fetch data");
                return res.json()
            }).then(data => {
	      console.log(data);
              setData(data);
              setLoading(false);
            }).catch(err => {
                if( err.name !== 'AbortError'){
                    console.log(err.message);
                    setLoading(false);
                    setError(err.message);
                }
            })
            return () => abortCont.abort();
    }, [url]);

    return { data, loading,  error}
}

export default useFetch;
