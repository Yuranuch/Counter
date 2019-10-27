import React from "react"
import "./App.css"


class StartValueSetting extends React.Component {
    state = {}

    onIncreaseStartNum = () => {
        this.props.increaseStartNum()
    }

    onReduceStartNum = () => {
        this.props.reduceStartNum()
    }

    render = () => {

        let classForError = this.props.errorForStart ? "max error" : "max"

        return (
            <div className={classForError}>
                <span>Start </span>
                <button onClick={this.onReduceStartNum}>-</button>
                <span> {this.props.startValue} </span>
                <button onClick={this.onIncreaseStartNum}>+</button>
            </div>
        )
    }
}

export default StartValueSetting
