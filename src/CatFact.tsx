import { useEffect, useState } from "react"
import { getCatFacts } from "./api/getCatFacts";
import { useFetch } from "./hooks/useFetch";

export const CatFacts = () => {

    const { data, isLoading, error } = useFetch('https://catfact.ninja/facts123');

    return (
        <ul>
            {error && <>{error}</>}
            {isLoading && <>Laddar...</>}
            {data && data.data && data.data.map((catFact: any) => <li key={catFact.fact}>{catFact.fact}</li>)}
        </ul>
    )

}