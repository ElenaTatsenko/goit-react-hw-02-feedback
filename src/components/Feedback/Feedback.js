import React from "react";
import FeedbackOptions from "./FeedbackOptions"

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
       handleIncrement = (e) => {
    
        
           this.setState((prevState) => {
               let option = e.target.textContent

               if (option === 'Good') {
                   return {
                       good: prevState.good + 1
                   };
                
               } else if (option === 'Neutral') {
                   return {
                       neutral: prevState.neutral + 1
                   };
               } else {
                   return {
                       bad: prevState.bad + 1
                   }
               };

           });
    }
    render() {
        return (
            <div className="Feedback">
                <p className="Feedback__text">Please leave feedback</p>
                <FeedbackOptions onLeaveFeedback={this.handleIncrement} options={['Good', 'Neutral', 'Bad']}/>
                <h2 className="Feedback__statistics">Statistics</h2>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                </ul>
            </div>

        )
    }
}
export default Feedback