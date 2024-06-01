import React from 'react'
import Card from '../components/Card'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import Button from '../components/Button'

const Section2 = () => {
  return (
    <>
    <Card
     image1={card1}
     image2={card2}
     heading="Kitchen’s “The heart of the Home”"
     para="Let's face it, you work hard and spend a good amount of your free time in your kitchen. You deserve an amazing, clean, functional, and brilliant space. This interactive web guide will enable you to clearly communicate with your design professional what is most important to you for this new oasis."
    />
    <Button
         backLink="/"
         nextLink="/sec3"
    />
    </>
  )
}

export default Section2