import React from "react";
import FeedbackOptions  from "./FeedbackOptions"
import Statistics  from "./Statistics";
import Section from "./Section";
import Notification  from './Notification';


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
            }
            else if (option === 'Neutral') {
                return {
                    neutral: prevState.neutral + 1
                };
            } else {
                return {
                    bad: prevState.bad + 1
                }
            };
        });
    };
    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100);
     
    render() {
        return (
            <>
            <Section
            title="Please leave feedback">
                <FeedbackOptions
                    onLeaveFeedback={this.handleIncrement}
                    options={['Good', 'Neutral', 'Bad']}
                />
                    <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                </Section>
            </>

        )
    };
}
export default Feedback