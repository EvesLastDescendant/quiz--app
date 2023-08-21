import React, { useState, useEffect } from "react"
import data from "./quizData"
import Quiz  from "./Quiz"
import Result from "./Result"
import WelcomePage from "./WelcomePage"
// import Timer from "./Timer"

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswer, setUserAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [quizStarted, setQuizStarted] = useState(false)
    const [quizFinished, setQuizFinished] = useState(false)

    function startQuiz() {
        setQuizStarted(true)
    }

    function handleTimeOut () {
        setQuizFinished(true)
        console.log('timeout')
    }

    function handleEventAnswerChange(e) {
        setUserAnswer(e.target.value)
    }

    function handleEventSubmit(e) {
        e.preventDefault()
        if (userAnswer === data[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswer("")
    }

    function handleGoBack() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }
    
    function handleEventRestart() {
        setScore(0)
        setCurrentQuestion(0)
        setUserAnswer("")
    }

    const renderWelcomePage = () => {
        return (
            <WelcomePage 
                clickMethod={startQuiz}
            />
        )
    }

    const renderTimer = () => {
        return (
            <Timer 
                initialTime={120}
                onTimeout={handleTimeOut}
            />
        )
    }

    const renderQuiz = () => {
        return (
            <Quiz 
                question={data[currentQuestion].question}
                options={data[currentQuestion].options}
                userAnswer={userAnswer}
                handleEventAnswerChange={handleEventAnswerChange}
                handleEventSubmit={handleEventSubmit}
                handleGoBack={handleGoBack}
            />
        )
    }

    const renderResult = () => {
        return (
            <Result 
                score={score}
                allQuestions={data.length}
                handleEventRestart={handleEventRestart}
                value={score}
            />
        )
    }


    return (
        <React.StrictMode>
            <main className="container-fluid">
                {quizStarted === false ? (
                    renderWelcomePage()
                ) : (
                        
                        <div className="container-fluid">
                            {currentQuestion >= 0 && currentQuestion < data.length ? 
                                <div>
                                    {renderQuiz()}
                                </div>
                                : 
                                renderResult()
                            }
                        </div>
                    )
                }
                {/* {quizStarted === true && quizFinished === true && (
                    <div>
                        {renderTimer()}
                    </div>
                )} */}
            </main>
        </React.StrictMode>
    )
}
