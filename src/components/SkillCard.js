export default function SkillCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-11/12  p-4 text-center justify-center border-2 border-dark-300 dark:bg-dark-500 rounded-md flex flex-col h-48 ">
            <img src={props.img} className="w-28 max-h-28 mx-auto" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold dark:text-white text-black md:text-xl">{props.name}</h1>
                <p className="font-light  text-gray-400 md:text-lg">{props.experience} </p>
            </div>
        </div>
    )
}
