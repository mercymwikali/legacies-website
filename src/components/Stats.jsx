import React, { useEffect, useState } from 'react';

const CountAnimation = ({ initialValue, targetValue, text }) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 secs

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    // Display the count value with appropriate symbols based on text content
    let displayText;
    if (text.includes("Satisfaction")) {
        displayText = `${count}%`;
    } else if (text.includes("Happy Clients") || text.includes("Projects Completed")) {
        displayText = `${count}+`;
    } else {
        displayText = count;
    }

    return (
        <div className="stats-card">
            <span className="num">{displayText}</span>
            <span className="text">{text}</span>
        </div>
    );
};


function Stats() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4 row'>
            <CountAnimation
                initialValue={0}
                targetValue={25}
                text="Happy Clients"
                className='hexone'
            />
            <CountAnimation
                initialValue={0}
                targetValue={25}
                text="Projects Completed"
            />
            <CountAnimation
                initialValue={0}
                targetValue={10}
                text="Years of Experience"
            />
            <CountAnimation
                initialValue={0}
                targetValue={100}
                text="Satisfaction"
            />
        </div>
    );
}

export default Stats;
