import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
export default function CardFlip(isFlipped, handleClick) {
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <p onClick={handleClick}>This is the front of the card</p>
              <p onClick={handleClick}>This is the back of the card</p>
              </ReactCardFlip>
        </>
    )
}
