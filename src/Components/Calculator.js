import React, {useState} from 'react';
import CalculatorTitle from './CalculatorTitle';
import Footer from './Footer';

function Calculator() {
  const [questionDisplay, setQuestionDisplay] = useState("")
  const [answerDisplay, setAnswerDisplay] = useState("")

  function displayNumbers(event) {
      let value = event.target.value;
      setQuestionDisplay(prevDisplay => prevDisplay += value);
  }

  function calculateAnswer() {
    try {
        // eslint-disable-next-line
      setAnswerDisplay(eval(questionDisplay));
      setQuestionDisplay("")
    }
    catch(err) {
      setAnswerDisplay("Math Error")
    }
  }

  function clearScreen() {
    setQuestionDisplay("");
    setAnswerDisplay("");
  }

  function deleteCharacter() {
    setQuestionDisplay(prevDisplay => {
      let str = questionDisplay;
      str = str.substr(0, str.length - 1);
      return str;
    })
  }

    return (
      <div className="frame">

        <CalculatorTitle value="React Calculator"/>

        <div className="mainCalc">

          <div className="screen">
              <div className="screenRow">
                  <input id="questionDisplay" name="question" type="text" value={questionDisplay} readOnly/>
                  <br/>
                  <input id="answerDisplay" name="answer" type="text" value={answerDisplay} readOnly/>
              </div>
          </div>

          <div className="buttonsContainer">
              <button value={"Delete"} onClick={deleteCharacter}>Delete</button>
              <button value={"/"} onClick={event => displayNumbers(event)}>/</button>
              <button value={"*"} onClick={displayNumbers}>*</button>
              <button value={"-"} onClick={displayNumbers}>-</button>

              <button value={"7"} onClick={event => displayNumbers(event)}>7</button>
              <button value={"8"} onClick={event => displayNumbers(event)}>8</button>
              <button value={"9"} onClick={event => displayNumbers(event)}>9</button>
              <button value={"+"} className="no-bottom-border" onClick={displayNumbers}>+</button>

              <button value={"4"} onClick={displayNumbers}>4</button>
              <button value={"5"} onClick={displayNumbers}>5</button>
              <button value={"6"} onClick={displayNumbers}>6</button>
              <button value={"+"} className="no-top-border" onClick={displayNumbers}></button>

              <button value={"1"} onClick={displayNumbers}>1</button>
              <button value={"2"} onClick={displayNumbers}>2</button>
              <button value={"3"} onClick={displayNumbers}>3</button>
              <button value={"="} className="no-bottom-border" onClick={calculateAnswer}>=</button>

              <button value={"Clear"} onClick={clearScreen}>Clear</button>
              <button value={"0"} onClick={displayNumbers}>0</button>
              <button value={"."} onClick={displayNumbers}>.</button>
              <button value={""} className="no-top-border" onClick={calculateAnswer}></button>
          </div>

        </div>
     
        <Footer />

      </div>
    )
  }

export default Calculator;
