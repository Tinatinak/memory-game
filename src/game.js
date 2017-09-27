import React from 'react'
import Card from "./card"
import shuffle from "shuffle-array"
import uuidv4 from "uuid/v4"



const photos = [
  "/images/dog1.jpg",
  "/images/dog2.jpg",
  "/images/dog3.jpg",
  "/images/dog4.jpg",
  "/images/dog5.jpg",
//  "/images/dog6.jpg"
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
      faceUp: true,
      isMatched: false
      })
    )
  }

  //function for what will happen if a carid is clicked
  //automatically gets the src as argument
  //due to how onClick is defined in Card class
  handleCardClick = (cardId) => {
    alert("I am clicked! " + cardId)
  }

  //creates an JSX element for a card (that can be rendered)
  //key: unique ID for react to render
  //id: unique ID for us to use
  makeCardJSX = (card) => (
    <Card
    src={card.src}
    key={card.id}
    id={card.id}
    onCardClick={this.handleCardClick} />
  )

  render () {
    return (
      <div className="game">
        <h1>Memory </h1>
        <p>Pick two cards. If the image is the same, you have a pair! <br />
        The game is won when all pairs have been found. </p>

        {
          this.state.cards.map(this.makeCardJSX)


          /*
          //renders each card's backside or image
          {
          this.state.cards.map((card) => {
            if (!card.faceUp) {
              return <Card src={"/images/backside.jpeg"}
              onCardClick={this.handleCardClick}/>
            } else {
              return <Card src={card.src}
              key={card.id} id={card.id}
              onCardClick={this.handleCardClick}
              />
            }
          })
        }
          */
}

      </div>
    )
  }

/*
render () {
  return (
    <div className="game">
      <h1>Memory </h1>
      <p>Pick two cards. If the image is the same, you have a pair! <br />
      The game is won when all pairs have been found. </p>


      {this.state.cards.map((card) => (
        <Card src={card.src} />
      ))}

    </div>
  )
}
*/
}



export default Game
