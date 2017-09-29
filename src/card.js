import React from "react"
import "./card.css" //Just normal css, react injects it in to the <head> component

class Card extends React.Component {
  //e.g. props and render() is inhereited from React.Component
  //because Card is a class, it can use this.blalblabla

  //React calls the render function when mounting a component
  //render don't need the fat arrow (=>) since it is inhereited
  //the render function needs to return an JSX-element

  //this will handle the onCardClick function which was passed into
  //the Card class from the Game class

  handleClick = () => {
    return this.props.onCardClick(this.props.id)
  }

  //different classnames gives different css properties
  getClassName = () => {
    if (this.props.isMatched) {
      return "card isMatched"
    } else if (this.props.faceUp) {
      return "card faceUp"
    } else {
      return "card faceDown"
    }
  }

  render () {
    return (
      <div className={this.getClassName()} onClick={this.handleClick}>
      <img src={this.props.src} alt={this.props.id}/>
      </div>
    )
  }
}

//to be able to import card in e.g. game, we need to export it
export default Card
