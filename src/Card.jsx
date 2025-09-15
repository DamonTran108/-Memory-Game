import { useState } from 'react'
import './card_style.css'

function Card({image , name, onClicked}){


    return (



        <div className='card_container' onClick={() =>{
            
          
                if (typeof onClicked === 'function') {
            onClicked(); // only call if it's a function
        } else {
            console.warn('onClicked is not a function');
        }
            
        }}>
            <div>
                <img src = {image} />
                <h3>{name}</h3>
           </div>
        </div>

    );

}

export default Card
