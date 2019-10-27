import React from "react"
import "./App.css"


class DesignControl extends React.Component {

    onDesignRed = () => {
        this.props.changeDesignRed()
    }

    onDesignGreen = () => {
        this.props.changeDesignGreen()
    }

    onDesignAzure = () => {
        this.props.changeDesignAzure()
    }


    render = ()=> {
        let classForRed = this.props.counterDesign === "Red" ? "redBg" : ""
        let classForGreen = this.props.counterDesign === "Green" ? "greenBg" : ""
        let classForAzure = this.props.counterDesign === "Azure" ? "azureBg" : ""
        return (
            <div className="control">
                <div>Change Design</div>
                <button onClick={this.onDesignRed} className={classForRed}>Red</button>
                <button onClick={this.onDesignGreen} className={classForGreen}>Green</button>
                <button onClick={this.onDesignAzure} className={classForAzure}>Azure</button>
            </div>
        )
    }
}

export default DesignControl
