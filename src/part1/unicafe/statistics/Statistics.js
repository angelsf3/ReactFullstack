import React from "react";

function Statistics({ data }) {
    const { good, neutral, bad } = data
    const all = good + neutral + bad
    const average = (all > 0) ? (good / all) - (bad / all) : 0
    const positive = (all > 0) ? (good / all) * 100 : 0

    if (all <= 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return(
        <div>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
}

export default Statistics
