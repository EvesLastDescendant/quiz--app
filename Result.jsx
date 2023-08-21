import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"

export default function Result(prop) {
    return (
        <div className="container w-50 result--field">
            <div className="d-flex flex-row align-items-center justify-content-center">
                <label className="mx-2">Score:</label>
                <progress value={prop.value} max="12">{prop.score}%</progress>
            </div>
            <div className="text-start">
                <button
                    className="btn btn-outline-info btn-sm"
                    onClick={prop.handleEventRestart}>
                        Restart <FontAwesomeIcon icon={faRepeat} />
                </button>
            </div>
        </div>
    )
}