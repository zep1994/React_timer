import React, { Component } from 'react';

class Timer extends React.Component {
    constructor(props) {
    super(props)
     this.state = {count: 1}
    }
    render() {
        const {count} = this.state
        return (
            <div> 
                <h1>Current Count: { count }</h1>
                <button onClick={this.doIntervalChange}>Click</button>
            </div>
        )
    }

    componentDidMount() {
        const {startCount} = this.props
        this.setState({
            count: startCount
        })
       this.doIntervalChange()
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000)  
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default Timer;