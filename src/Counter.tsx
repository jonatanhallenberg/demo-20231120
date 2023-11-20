import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export const Counter = () => {
    const { count, increase, decrease } = useCounter(10);

    return (
        <>
            <h2>My counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => increase()}>increase</button>
            <button onClick={() => decrease()}>decrease</button>
        </>
    )
}