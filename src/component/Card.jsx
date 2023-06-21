export default function Card({name,cardId,img,handleClick}){

    return(
        <div onClick={()=>handleClick(cardId)} key={cardId} className='flex flex-col text-center w-full h-full text-red-500 border-2 border-black text-lg cursor-pointer'>
            <img className="h-[90%]" src={img}/>
            <div className="bg-white">{name}</div>
        </div>
    )
}           