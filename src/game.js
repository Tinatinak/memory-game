import React from 'react'
import Card from "./card"
import Counter from "./counter"


class Game extends React.Component {

//State needs to be an object!!
  state = {
    cards: [
      {src: "/images/dog1.jpg"},
      {src: "/images/dog2.jpg"},
      {src: "/images/dog3.jpg"},
      {src: "/images/dog4.jpg"},
      {src: "/images/dog5.jpg"},
      {src: "/images/dog6.jpg"}
    ]
  }

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
