import React from 'react'
import Card from "./card"
import shuffle from "shuffle-array"


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
    let i = 0
    return duplicatedPhotos.map((url) => ({
      id: i++,
      src: url,
      faceUp: true,
      isMatched: false
      })
    )
  }

  //function for what will happen if a carid is clicked
  //automatically gets the src as argument due to how onClick is defined in Card class
  handleCardClick = (cardSrc) => {
    alert("I am clicked! " + cardSrc)
  }

  renderCard = (card) => (
    <Card src={card.src}
    onCardClick={this.handleCardClick}/>
  )

  render () {
    return (
      <div className="game">
        <h1>Memory </h1>
        <p>Pick two cards. If the image is the same, you have a pair! <br />
        The game is won when all pairs have been found. </p>

        {
          //renders each card's backside or image
          this.state.cards.map((card) => {
            if (!card.faceUp) {
              return <Card src={"/images/backside.jpeg"}
              onCardClick={this.handleCardClick}/>
            } else {
              return <Card src={card.src}
              onCardClick={this.handleCardClick}/>
            }
        })
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
