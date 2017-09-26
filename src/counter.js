import React from 'react'

class Counter extends React.Component {

  state = {
    //var count = 0
    //Todo -- varför kolon?
    count: 0
  }

  handleButtonClick = () => {
    this.setState({count: this.state.count + 1})
    //this.setState(this.state.count++)
    //Todo -- varför inte som ovan?
  }

  handleDecreaseButtonClick = () => {
    if (this.state.count !== 0) {
      this.setState({count: this.state.count - 1})
    }
  }

  render() {

    return (
      //Todo -- varför this? pga default namn i React.Component?
      <div>Count: {this.state.count}
      <button onClick={this.handleButtonClick}>Add!</button>
      <button onClick={this.handleDecreaseButtonClick}>Decrease!!</button>
      </div>
    )

  }

}


export default Counter
