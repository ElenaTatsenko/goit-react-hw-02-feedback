import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <div className="FeedbackOptions">{
        options.map(option => <button key={option} className="Feedback__btn" type="button" onClick={onLeaveFeedback}>{option}</button>)
    }  
    </div >
}
    
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions