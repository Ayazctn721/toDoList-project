
import { useState, useEffect } from 'react'

function DateTime() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center mt-3 position-absolute top-0 start-0">
            <h4>{currentTime.toLocaleDateString()}</h4>
            <h5>{currentTime.toLocaleTimeString()}</h5>
        </div>
    )
}

export default DateTime
