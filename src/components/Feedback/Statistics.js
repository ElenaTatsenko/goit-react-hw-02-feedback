import React from "react";
import PropTypes from 'prop-types';
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div className="Statistics" >
                    <h2>Statistics</h2>
        {total === 0 ? (<Notification message="There is no feedback" />) : (<ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage ? positivePercentage : 0}%</li>
        </ul>)}
           </div >
}
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
export default Statistics