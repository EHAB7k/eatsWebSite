export default function QrCard(props){
    return (
        <div  className="  p-4 text-center justify-center bg-white rounded-md flex flex-col h-48" width={"100%"} >
            <img src={props.img} className="w-28 max-h-28 mx-auto" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold text-black md:text-xl">{props.name}</h1>
                <p className="font-light text-gray-400 md:text-lg">{props.experience} </p>
            </div>
        </div>
    )
}
