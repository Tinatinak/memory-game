import React from 'react'
import Card from "./card"

const Game = () => (
  <div className="game">
    <h1>Memory </h1>
    <p>Pick two cards. If the image is the same, you have a pair! <br />
    The game is finished when all pairs have been found. </p>

    <Card src="/images/dog1.jpg"/>
    <Card src="/images/dog2.jpg"/>
    <Card src="/images/dog3.jpg"/>
    <Card src="/images/dog4.jpg"/>
    <Card src="/images/dog5.jpg"/>
    <Card src="/images/dog6.jpg"/>
    <Card src="/images/dog1.jpg"/>
    <Card src="/images/dog2.jpg"/>
    <Card src="/images/dog3.jpg"/>
    <Card src="/images/dog4.jpg"/>
    <Card src="/images/dog5.jpg"/>
    <Card src="/images/dog6.jpg"/>
  </div>
)

export default Game