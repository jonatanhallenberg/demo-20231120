import { useEffect, useState } from "react";

export const useFetch = (url: any) => {

    const [data, setData] = useState({ data: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                } else {
                    setError(response.status.toString());
                    console.log('response not ok');
                }
            } catch (e: any) {
                console.log('error cought');
                setError(e.toString());
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();

    }, [])


    return {
        data: data,
        isLoading: isLoading,
        error: error
    }
}