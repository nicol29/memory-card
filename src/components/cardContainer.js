import { useState } from 'react'
import uniqid from 'uniqid'
import Card from './card'

function CardContainer () {
  let [ block, setBlock ] = useState([
    {
      name: 'Gold Block',
      image: require('../images/gold.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Cobblestone',
      image: require('../images/cobblestone.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Crafting Table',
      image: require('../images/crafting-table.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Diamond Ore',
      image: require('../images/diamond.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Dirt',
      image: require('../images/dirt.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Endstone',
      image: require('../images/endstone.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Gravel',
      image: require('../images/gravel.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Log',
      image: require('../images/log.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Netherrack',
      image: require('../images/netherrack.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Obsidian',
      image: require('../images/obsidian.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Sand',
      image: require('../images/sand.jpeg'),
      clicked: false,
      id: uniqid()
    },
    {
      name: 'Wool',
      image: require('../images/wool.jpeg'),
      clicked: false,
      id: uniqid()
    }
  ])

  let [ highScore, setHighScore] = useState(0);

  let handleClick = () => {
    
  }

  let cards = block.map(item => (
    <Card 
      name={item.name} 
      image={item.image} 
      key={item.id}
      handleClick={handleClick}
    />
  ))

  let scrambleArray = () => {
    let scrambledArray = [];
    let arrayToScramble = cards

    while (scrambledArray.length < 12) {
      let randomIndex = Math.floor(Math.random() * arrayToScramble.length);
      
      scrambledArray.push(arrayToScramble[randomIndex]);
      arrayToScramble.splice(randomIndex, 1);
    }
    return scrambledArray
  }

  return (
    <div>
      <header>
      <h1>Minecraft Memory</h1>
      </header>

      <div className="card-container">
        {scrambleArray()}
      </div>
    </div>
  )
}

export default CardContainer
