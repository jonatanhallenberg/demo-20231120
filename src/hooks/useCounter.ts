import { useState } from "react";

export const useCounter = (initialValue: any) => {

    const [ count, setCount ] = useState(initialValue);

    return {
        count,
        increase: () => setCount(count + 1),
        decrease: () => setCount(count - 1)
    }

}