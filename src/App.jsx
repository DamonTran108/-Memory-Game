import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import Controller from '../controller.js'
import View from '../view.js'
import {getList} from './api/api.js'
import './app_style.css'

let set = new Set([]);


function App() {



  const [pokemon , setPokemon] = useState([]);

  const[score, setScore] = useState(0);

  const[bestScore, setBestScore] = useState(0);

  


  function shufflePokemon(pokemon){

    let copy  = [...pokemon];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    } 
   
  return copy

  }

  function handleClick(p){

    console.log("clicked : " + p);
    if(!set.has(p)){
        setScore(score + 1);
        set.add(p);
    }else{
       
      if(score > bestScore){
        setBestScore(score);
        console.log("best score :  " + bestScore);
      }

      setScore(0);
      set.clear();
    }
    


    setPokemon(shufflePokemon(pokemon));
  
    console.log(score);
    console.log(set);

   
 

  }

  

  useEffect (() => {

    const poo = async () => {

       console.log("PENIS");

       var pokemon = await getList([6, 3 , 9 , 133, 63, 470, 45 , 2 , 959 , 5, 8, 796]);

       console.log(pokemon);


       pokemon = shufflePokemon(pokemon);
       setPokemon(pokemon);

       

      // console.log(pokemon);


    }

    poo();

  }, []) 




  //const pokemon = await fetchPokemon();

  

  return (

    <div className='container'>
      <div>Score : {score}</div>
      <div>Best Score : {bestScore}</div>

  
    <div className='pokemon_container'>
      {pokemon.map((p) => <Card name={p.name} image={p.sprites.front_default} onClicked={() => (handleClick(p.name))}/>)}
         
    </div>
      
      </div>

 
  )
}

export default App
