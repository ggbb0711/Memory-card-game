export default function Header({point}){
    return(
    <div className="w-full p-4 bg-slate-900 flex justify-between">
        <h1 className="text-2xl text-green-300 m-auto">Memory game</h1>
        <div>
            <p className="text-yellow-600">Score: <span>{point}</span></p>
        </div>
    </div>)
}