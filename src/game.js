import React from 'react'
import Card from "./card"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"
import SuccessMessage from "./successMessage"

const photos = [
  "/images/dog1.jpg",
  "/images/dog2.jpg",
  //"/images/dog3.jpg",
  //"/images/dog4.jpg",
  //"/images/dog5.jpg",
  //"/images/dog6.jpg"
]

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  //Sets up a new board cards (two of each) in random order
  setupGame = () => {
    const duplicatedPhotos = photos.concat(photos)
    shuffle(duplicatedPhotos)
    return duplicatedPhotos.map((url) => ({
      id: uuidv4(),
      src: url,
      faceUp: false,
      isMatched: false
    }))
  }

  //resets game
  resetGame = () => (
    this.setState({
      cards: this.setupGame()
    })
  )

  //function for what will happen if a card is clicked,
  //i.e.the card clicked is opened
  //automatically gets the card's Id as argument
  //due to how onClick is defined in Card class
  handleCardClick = (cardId) => {
    const newStateArray = this.state.cards.map((card) => {
      if (card.id === cardId && !card.faceUp) {
        card.faceUp = true
      }
      return card
    })
    //passes the new state to the cards-array and checks if there is a pair
    this.setState({
      cards: newStateArray},
      this.checkIfPair)
  }

  //sets all cards' faceUp state to false
  closeAllCards = () => {
    const newStateArray = this.state.cards.map((card) => {
      card.faceUp = false
      return card
    })
    this.setState({
      cards: newStateArray
    })
  }

  //checks if two cards match
  checkIfPair = () => {
    //sorts out the open cards
    const openCards = this.state.cards.filter((card) => {
      return card.faceUp
    })
    //checks if there are two cards open and if they match
    if (openCards.length === 2) {
      if (openCards[0].src === openCards[1].src) {
        openCards[0].isMatched = true
        openCards[1].isMatched = true
      }
      setTimeout(this.closeAllCards, 500)
    }
  }

  //check if game is finished
  gameFinished = () => {
    const remainingCards = this.state.cards.filter((card) => {
      return !card.isMatched
    })
    if (remainingCards.length === 0) {
      return true
    }
    else return false
  }

  //creates an JSX element for a card (that can be rendered)
  //key: unique ID for react to render
  //id: unique ID for us to use
  makeCardJSX = (card) => {
    return <Card
    src={card.src}
    key={card.id}
    id={card.id}
    faceUp={card.faceUp}
    isMatched={card.isMatched}
    onCardClick={this.handleCardClick}
    />
  }

  //render components to the screen
  render () {

    let myComponent = (
    <div>
    <SuccessMessage />
    <button id="resetButton" onClick={this.resetGame}>Play again!</button>
    </div>
    )
    if (!this.gameFinished()) {

      myComponent = (
        <div>
        <p>Pick two cards. If the image is the same, you have a pair! <br />
        The game is won when all pairs have been found. </p>
        {this.state.cards.map(this.makeCardJSX)}
        </div>
      )
    }
    return (
      <div className="game">
      <h1>Memory </h1>
        {myComponent}

      </div>
    )
  }


}

export default Game
