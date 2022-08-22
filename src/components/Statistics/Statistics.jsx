import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <>
                {positivePercentage !== 0 &&
                <p>Positive feedback: {`${positivePercentage}%`}</p>}
            </>
        </>
    );
};

export default Statistics;