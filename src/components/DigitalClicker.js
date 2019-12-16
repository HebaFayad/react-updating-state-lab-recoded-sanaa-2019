import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clicked = (

    ) => {
        this.setState(prevState => {
            return { timesClicked: prevState.timesClicked + 1 }
        })

    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>{this.state.timesClicked}</button>
            </div>
        )
    }
}