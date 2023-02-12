import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import ScoreTracker from './scoreTracker'
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

  let [ score, setScore] = useState({
    currentScore: 0,
    highScore: 0
  });

  let handleClick = (event) => {
    let itemToUpdate;
    
    if(event.target.className !== 'card') {
      itemToUpdate = event.target.parentNode.getAttribute('data-index');
    } else {
      itemToUpdate = event.target.getAttribute('data-index');
    }

    let temp = [...block]

    if (block[itemToUpdate].clicked) {
      manageScore('reset');
    } else {
      temp[itemToUpdate].clicked = true;
      manageScore('increment');
      setBlock(temp);
    }
  }

  let manageScore = (status) => {
    if (status === 'reset') {
      let temp = score;
      temp.currentScore = 0;

      resetGame();
    } else {
      let temp = score;

      if(temp.currentScore === temp.highScore){
        temp.currentScore ++;
        temp.highScore = temp.currentScore;
      } else {
        temp.currentScore ++;
      }
      setScore(temp);
    }
    console.log('Score: ' + score.currentScore + ' High: ' + score.highScore) 
  }

  let cards = block.map((item, index) => (
    <Card 
      name={item.name} 
      image={item.image} 
      key={item.id}
      index={index}
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

  let resetGame = () => {
    let temp = block;

    temp.map(item => (
      item.clicked = false
    ));

    setBlock(temp);
  }

  useEffect(() => {
    scrambleArray()
  },[])

  function lol () {
    console.log('hi')
  }

  return (
    <div>
      <header>
      <h1>Minecraft Memory</h1>
      </header>
      <ScoreTracker 
        currentScore={score.currentScore}
        highScore={score.highScore}
      />
      <div className="card-container">
        {scrambleArray()}
      </div>
    </div>
  )
}

export default CardContainer
