import React, {useState} from 'react';

function OutputScreen(props) {
    const [questionDisplay, setQuestionDisplay] = useState("")
    const [answerDisplay, setAnswerDisplay] = useState("")

    function displayNumbers(event) {
        let value = event.target.value;
        setQuestionDisplay(prevDisplay => prevDisplay += value)
    }

    function calculateAnswer() {
        // eslint-disable-next-line
        setAnswerDisplay(eval(questionDisplay))
    }

    return (
        <div className="screen">
            <div className="screenRow">
                <input id="questionDisplay" name="question" type="text" value={questionDisplay}/>
                <br/>
                <input id="answerDisplay" name="answer" type="text" value={answerDisplay}/>
            </div>
        </div>
    )
}

export default OutputScreen;