import React from 'react'
import Card from "./card"
import Counter from "./counter"

const photos = [
  "/images/dog1.jpg",
  "/images/dog2.jpg",
  "/images/dog3.jpg",
  "/images/dog4.jpg",
  "/images/dog5.jpg",
  "/images/dog6.jpg"
]

class Game extends React.Component {

//State needs to be an object!!
  constructor(props) {
    super(props)
    this.state = {
      cards: this.setupGame()
    }
  }

  setupGame = () => {
    return photos.map((url) => (
      {src: url}
    ))
  }

/*
  renderCard = (something) => {
    return <Card src={something.src} />
  }
*/

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

}



export default Game
