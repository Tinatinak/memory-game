import React from "react"
//import "./card.css" //Just normal css, react injects it in to the <head> component

class Card extends React.Component {
  //e.g. props and render() is inhereited from React.Component
  //because Card is a class, it can use this.blalblabla

  constructor(props) {
    super(props)
    this.state = {
      src: this.src
      //faceUp: this.faceUp
      //id: this.id
    }
  }

  handleClick = () => {
    alert("I am clicked! " + this.props.src)
  }

  //React calls the render function when mounting a component
  //render don't need the fat arrow (=>) since it is inhereited
  //the render function needs to return an JSX-element
  render () {
    return (
      <div className="card" onClick={this.handleClick}>
      <img src={this.props.src} />
      </div>
    )
  }
}

//to be able to import card in e.g. game, we need to export it
export default Card
