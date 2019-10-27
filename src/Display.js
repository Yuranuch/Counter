import React from "react"
import "./App.css"


class Display extends React.Component {

    onIncDisplayNum = () => {
        this.props.IncDisplayNum()

    }
    onValueReset = () => {
        this.props.valueReset()
    }

    render = () => {
        let classForPeak = this.props.peak ? "peak" : ""
        let classForButtons = this.props.buttonDisable ? "setButtons buttonDisable" : "setButtons"
        let classForInc = (this.props.maxValue === this.props.value) ? "inc setButtonDisable" : "inc"

        return (
            <div>
                <div className="display">
                    <span className={classForPeak}>{this.props.value}</span>
                </div>
                <div className={classForButtons}>
                    <div className={classForInc}>
                        <span onClick={this.onIncDisplayNum}>Inc</span>
                    </div>
                    <div className="reset">
                        <span onClick={this.onValueReset}>Reset</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
