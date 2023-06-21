import { useState } from 'react'
import { useEffect } from 'react'
import Header from './component/Header'
import CardGrid from './component/CardGrid'
import Popup from './component/Popup'
let Images=import.meta.glob('/src/images/*.webp',{eager:true})

function App() {
  const [point,setPoint]=useState(0)
  const [isGameOver,setIsGameOver]=useState(false)
  const [isWon,setIsWon]=useState(false)
  const [cardList, setCardList] = useState(
    shuffle(Object.keys(Images).map((path,id)=>{
      return{
        id:id,
        name:path.match(/(?<=\/src\/images\/)\w+(?=_Card\.webp)/gm)[0],
        img:path,
        hasClicked:false
      }
    }))
  )

  function handleShuffleCardList(){
    console.log(1)
    setCardList(shuffle(cardList))
  }

  async function handleClick(cardId){
    let clone=[...cardList]


    //The card has already been clicked
    if(clone[cardId].hasClicked) {
      setIsWon(false)
      setIsGameOver(true)
      return
    }

    //The card has never been clicked before
    if(!clone[cardId].hasClicked){
      setPoint(point+1)
      clone[cardId].hasClicked=true
      handleShuffleCardList()
      return
    }
  }

  function retryGame(){
    setIsGameOver(false)
    setPoint(0)
    setCardList(cardList.map(card=>{
      card.hasClicked=false
      return card
    }))
    handleShuffleCardList()
    return
  }


  //The player won
  useEffect(()=>{
    if(point===12){
      setIsWon(true)
      setIsGameOver(true)
      return
    }
  },[point])

  return (
    <div>
      <Header point={point}></Header>
      <CardGrid cardList={cardList} handleClick={handleClick}></CardGrid>
      {isGameOver?<Popup isWon={isWon} retryGame={retryGame}></Popup>:<></>}
    </div>
  )
}

function shuffle(array){
  let currIndex=array.length
  let randomIndex

 while (currIndex!==0){
    randomIndex=Math.floor(Math.random()*array.length)
    currIndex--

    [array[currIndex],array[randomIndex]]=[array[randomIndex],array[currIndex]]
  }

  return array
}

export default App
