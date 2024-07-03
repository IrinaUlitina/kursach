import { REACT_APP_API_TOKEN, REACT_APP_BASE_URL } from ".";
import { useEffect, useState } from "react";

// создаём пользовательский хук? для реальзации и унификации всех запросов к api
function useDataFetch({ url }) {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function ajax({ url }) {
        fetch(`${REACT_APP_BASE_URL}${url}`, {
            "Content-Type": "application/json",

            headers: {
                "X-Auth-Token": REACT_APP_API_TOKEN,
            },
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.errorCode == 429) {
                        setError(result.message);
                    } else {
                        setLoaded(true);
                        setItems(result);

                    }
                },

                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }
    useEffect(() => {
        ajax({ url: url });
    }, []);

    return [loaded, error, items, ajax];
}

export default useDataFetch;
