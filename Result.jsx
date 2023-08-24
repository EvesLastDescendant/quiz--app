import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export default function Result(prop) {
    return (
        <div className="container result--field shadow-lg p-5">
            <div className="d-flex flex-row align-items-center justify-content-center">
                <label className="mx-2 score">Score: {prop.score}</label>
                <progress value={prop.value} max="12">{prop.score}%</progress>
            </div>
            <div className="text-start">
                <p className="score-note">
                    {prop.score > 6 ? "SENIOR DEEEEV" : "Better luck next time"}
                </p>
                {/* <button
                    className="btn btn-outline-info btn-sm"
                    onClick={prop.handleEventRestart}>
                        Home <FontAwesomeIcon icon={faHome} />
                </button> */}
            </div>
        </div>
    )
}