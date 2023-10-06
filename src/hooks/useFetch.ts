import React from "react";

export default function useFetcher<T>(url: string, options?: RequestInit) {
    const [response, setResponse] = React.useState<T | null>(null);
    const [error, setError] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);

    const doFetch = React.useCallback(async (options?: RequestInit) => {
        setLoading(true);
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResponse(json);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    },[url]);

    return { response, error, loading, fetch : doFetch };
}