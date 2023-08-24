import React from "react"

export default function Quiz({question, options, userAnswer, handleEventAnswerChange, handleEventSubmit, handleGoBack}) {
    return (
        <div>
            <div className="container shadow-lg p-5 form--field">
                <div className="container title">
                    <h2 className="fw-bold">Question</h2> <hr />
                </div>
                <form onSubmit={handleEventSubmit}>
                    <p className="fw-semibold">{question}</p>
                    <div className="input--field">
                        {options.map(option => {
                            return (
                                <div className="border rounded me-2 mb-3 ps-3 py-3">
                                    <input
                                    type="radio"
                                    name="question"
                                    value={option}
                                    checked={userAnswer === option}
                                    onChange={handleEventAnswerChange}
                                    className="me-2"
                                    />
                                    <label>{option}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn-toolbar mt-4" role="toolbar" aria-label="Toolbar with button group">
                        <div className="btn-group me-auto" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-outline-info btn-sm px-3 py-1" onClick={handleGoBack}>
                                Back
                            </button>
                        </div>
                        <div className="btn-group" role="group" aria-label="First group">
                            <button type="submit" className="btn btn-outline-info btn-sm px-3 py-1">
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}