import React, {useState, useEffect} from "react"

export default function Timer({initialTime, onTimeout}) {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (time > 0) {
                setTime(time - 1)
            } else {
                clearInterval(timeInterval)
                onTimeout()
            }
        }, 1000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [time, onTimeout])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    return (
        <div className="container-fluid timer">
            <p className="fw-semibold">Time Remaining: {formatTime}</p>
        </div>
    )
}