import React from 'react';
import './App.css';

class MaxValueSetting extends React.Component {

    onIncreaseNum = () => {
        this.props.increaseMaxNum()
    }

    onReduceNum = () => {
        this.props.reduceMaxNum()
    }

    render = () => {

        let classForError = this.props.errorForMax ? "max error" : "max";

        return (
            <div className={classForError}>
                <span>Max </span>
                <button onClick={this.onReduceNum}>-</button>
                <span> {this.props.maxValue} </span>
                <button onClick={this.onIncreaseNum}>+</button>
            </div>
        );
    }
}

export default MaxValueSetting;
