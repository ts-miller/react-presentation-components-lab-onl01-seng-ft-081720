import React, { PureComponent } from 'react'

export default class SimpleComponent extends PureComponent {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        this.setState(prevState => ({
            mood: (prevState.mood === 'happy') ? 'sad' : 'happy'
        }))
    }

    render(){
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}