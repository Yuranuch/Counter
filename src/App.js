import React from "react"
import "./App.css"
import MaxValueSetting from "./MaxValueSetting"
import StartValueSetting from "./StartValueSetting"
import Display from "./Display"
import DesignControl from "./DesignControl"

class App extends React.Component {

    state = {
        maxValue: 10,
        startValue: 5,
        errorForMax: false,
        errorForStart: false,
        setValue: "Enter values and press 'SET' ",
        value: "Enter values and press 'SET' ",
        setButtonDisable: false,
        buttonDisable: true,
        incorrectValue: "Incorrect value",
        peak: false,
        isHidden: false,
        counterDesign: "Azure",
    }

    increaseMaxNum = () => {
        this.setState({
            maxValue: this.state.maxValue + 1,
            buttonDisable: true,
            setButtonDisable: false,
            value: this.state.setValue
        }, () => {
            if (this.state.maxValue <= this.state.startValue || this.state.maxValue < 0) {
                this.setState({
                    errorForMax: true
                })
            } else {
                this.setState({
                    errorForMax: false
                })
            }
        });

    }

    reduceMaxNum = () => {
        this.setState({
            maxValue: this.state.maxValue - 1,
            buttonDisable: true,
            setButtonDisable: false,
            value: this.state.setValue
        }, () => {
            if (this.state.maxValue <= this.state.startValue || this.state.maxValue < 0) {
                this.setState({
                    errorForMax: true
                })
            } else {
                this.setState({
                    errorForMax: false
                })
            }
        })
    }

    increaseStartNum = () => {
        this.setState({
            startValue: this.state.startValue + 1,
            buttonDisable: true,
            setButtonDisable: false,
            value: this.state.setValue
        }, () => {
            if (this.state.maxValue <= this.state.startValue || this.state.startValue < 0) {
                this.setState({
                    errorForStart: true
                })
            } else {
                this.setState({
                    errorForStart: false
                })
            }
        })
    }

    reduceStartNum = () => {
        this.setState({
            startValue: this.state.startValue - 1,
            buttonDisable: true,
            setButtonDisable: false,
            value: this.state.setValue
        }, () => {
            if (this.state.maxValue <= this.state.startValue || this.state.startValue < 0) {
                this.setState({
                    errorForStart: true
                })
            } else {
                this.setState({
                    errorForStart: false
                })
            }
        })
    }

    IncDisplayNum = () => {
        this.setState({
            value: this.state.value + 1
        }, () => {
            if (this.state.maxValue === this.state.value) {
                this.setState({
                    peak: true,
                })
            } else {
                this.setState({
                    peak: false
                })
            }
        })
    }

    valueReset = () => {
        this.setState({
            value: this.state.startValue,
            peak: false
        })
    }

    onSetValue = () => {
        this.setState({
            value: this.state.startValue,
            buttonDisable: false,
            setButtonDisable: true
        }, () => {
            if (this.state.errorForMax === true) {
                this.setState({
                    value: this.state.incorrectValue,
                    buttonDisable: true
                })
            }
            if (this.state.errorForStart === true) {
                this.setState({
                    value: this.state.incorrectValue,
                    buttonDisable: true
                })
            }
        })
    }

    changeDesignRed = () => {
        this.setState({
            counterDesign: "Red"
        })
    }

    changeDesignGreen = () => {
        this.setState({
            counterDesign: "Green"
        })
    }

    changeDesignAzure = () => {
        this.setState({
            counterDesign: "Azure"
        })
    }

    onHide = () => {
        this.setState({
            isHidden: true
        })
    }
    onShow = () => {
        this.setState({
            isHidden: false
        })
    }

    render = () => {
        let classForSettingsWrap = (this.state.counterDesign === "Red") ?
            "settingsWrap redBg" : (this.state.counterDesign === "Green") ?
                "settingsWrap greenBg" : (this.state.counterDesign === "Azure") ?
                    "settingsWrap azureBg" : "settingsWrap"
        let classForSet = this.state.setButtonDisable ? "set setButtonDisable" : "set"
        return (
            <div className="AppWrap">
                <div className="App">
                    <div className={classForSettingsWrap}>
                        <div className="settings">
                            <MaxValueSetting
                                reduceMaxNum={this.reduceMaxNum}
                                increaseMaxNum={this.increaseMaxNum}
                                maxValue={this.state.maxValue}
                                errorForMax={this.state.errorForMax}
                            />
                            <StartValueSetting
                                reduceStartNum={this.reduceStartNum}
                                increaseStartNum={this.increaseStartNum}
                                startValue={this.state.startValue}
                                errorForStart={this.state.errorForStart}
                            />
                        </div>
                        <div className={classForSet}>
                            <span onClick={this.onSetValue}>SET</span>
                        </div>
                    </div>
                    <div className={classForSettingsWrap}>
                        <Display
                            buttonDisable={this.state.buttonDisable}
                            peak={this.state.peak}
                            startValue={this.state.startValue}
                            maxValue={this.state.maxValue}
                            value={this.state.value}
                            valueReset={this.valueReset}
                            IncDisplayNum={this.IncDisplayNum}
                        />
                    </div>
                </div>
                {!this.state.isHidden && <DesignControl
                    changeDesignRed={this.changeDesignRed}
                    changeDesignGreen={this.changeDesignGreen}
                    changeDesignAzure={this.changeDesignAzure}
                    counterDesign={this.state.counterDesign}/>}
                {!this.state.isHidden ? <button onClick={this.onHide}>Hide design Settings</button> :
                    <button onClick={this.onShow}>Show design Settings</button>}
            </div>
        )
    }
}

export default App
