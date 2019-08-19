import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card-components';

export const CardList = props  => {
    console.log(props);
    //print out values between <CardList> and </CardList>
    //apply css class card-list to the <div>
    //return <div className='card-list'>{ props.children} </div>;
    return <div className='card-list'> 
    {   
        props.monster.map( monster => (
        <Card key = {monster.id} monster = {monster}> id={monster.id}</Card>
    )

    

    )}
     </div>;
};
