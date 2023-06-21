export default function Popup({isWon,retryGame}){
    return(
        <div className='flex justify-center items-center fixed w-screen h-screen z-30 bg-gray-400/50  top-0 right-0'>
           <div className='w-[200px] h-[100px] p-4 bg-white border-2 border-black z-50 text-center'>
              <p>{isWon?'Congrats! You won':'Too bad. Try again.'}</p>
              <button className='border-2 border-black p-2' onClick={retryGame}>Play again?</button>
           </div>
        </div>
    )
}