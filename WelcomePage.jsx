import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"

export default function WelcomePage(prop) {
    return (
        <div className="container mx-auto text-center shadow-lg p-5">
            <div className="container">
                <p className="fw-bold">Welcome!!</p>
                <p className="fw-semibold">Click the button below to start the test</p>
            </div>
            <button 
                type="button" 
                className="btn btn-info btn-sm" 
                onClick={prop.clickMethod}>
                    GoodLuck <FontAwesomeIcon icon={faArrowCircleRight} /> 
            </button>
        </div>
    )
}