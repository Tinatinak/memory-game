import React from 'react'

class Counter extends React.Component {

  state = {
    count: 0
  }

  handleButtonClick = () => {
    this.setState({count: this.state.count + 1})
  }

  handleDecreaseButtonClick = () => {
    if (this.state.count !== 0) {
      this.setState({count: this.state.count - 1})
    }
  }

  render() {

    return (
      <div>Count: {this.state.count}
      <button onClick={this.handleButtonClick}>Add!</button>
      <button onClick={this.handleDecreaseButtonClick}>Decrease!!</button>
      </div>
    )

  }

}


export default Counter
