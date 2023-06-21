import Card from "./Card"

export default function CardGrid({cardList,handleClick}){

    return(
        <div className='grid grid-cols-4 gap-4 w-[600px] m-auto'>
          {
            cardList.map((card,cardId)=>
            (<Card name={card.name} cardId={cardId} img={card.img} handleClick={handleClick} key={cardId}>
            </Card>)
            )
          }
        </div>
    )

}