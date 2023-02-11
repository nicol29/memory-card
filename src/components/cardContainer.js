import { useState } from 'react'
import uniqid from 'uniqid'
import Card from './card'

function CardContainer () {
  let [ block, setBlock ] = useState([
    {
      name: 'Gold Block',
      image: require('../images/gold.jpeg'),
      id: uniqid()
    },
    {
      name: 'Cobblestone',
      image: require('../images/cobblestone.jpeg'),
      id: uniqid()
    },
    {
      name: 'Crafting Table',
      image: require('../images/crafting-table.jpeg'),
      id: uniqid()
    },
    {
      name: 'Diamond Ore',
      image: require('../images/diamond.jpeg'),
      id: uniqid()
    },
    {
      name: 'Dirt',
      image: require('../images/dirt.jpeg'),
      id: uniqid()
    },
    {
      name: 'Endstone',
      image: require('../images/endstone.jpeg'),
      id: uniqid()
    },
    {
      name: 'Gravel',
      image: require('../images/gravel.jpeg'),
      id: uniqid()
    },
    {
      name: 'Log',
      image: require('../images/log.jpeg'),
      id: uniqid()
    },
    {
      name: 'Netherrack',
      image: require('../images/netherrack.jpeg'),
      id: uniqid()
    },
    {
      name: 'Obsidian',
      image: require('../images/obsidian.jpeg'),
      id: uniqid()
    },
    {
      name: 'Sand',
      image: require('../images/sand.jpeg'),
      id: uniqid()
    },
    {
      name: 'Wool',
      image: require('../images/wool.jpeg'),
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

  return (
    <div>
      <header>
      <h1>Minecraft Memory</h1>
      </header>

      <div className="card-container">
        {cards[Math.floor(Math.random() * cards.length)]}
      </div>
    </div>
  )
}

export default CardContainer
