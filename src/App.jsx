import { useContext, useState } from 'react'
import { QuizContext } from './context/Quiz'
import Question from './components/Question'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div className='quiz'>

    {quizState.showResults && (

      <div className='results'>
        <div className="completed">Quiz is completed</div>
        <div className="results-info">
          <div>You have completed the quiz</div>
          <div>
            Score : {quizState.correctAnswersCount} of {" "} {quizState.questions.length} right
          </div>
          <br />
          <div className="next-button" onClick = {() => dispatch({type : "RESTART"})}>Restart quiz</div>
        </div>
      </div>
      )
    }

      {!quizState.showResults && (
        <div>
          <div className='score'>
            Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
          </div>
          <Question />
          <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUE" })}>
            {quizState.currentQuestionIndex === 7 ? "Finish Quiz" : "Next Question"}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
