import React from 'react'
import './card.style.css'

export const Card = props => {
    return <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=120x160`}></img>
        <h4> {props.monster.name} {props.children} x </h4>
        <p>{props.monster.email}</p>
    </div>
}