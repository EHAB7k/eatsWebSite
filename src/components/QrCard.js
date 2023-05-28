export default function QrCard(props) {
    return (
        <div className="w-11/11  p-4 text-center justify-center bg-white border-dark-300 dark:bg-dark-500 rounded-md flex flex-col h-48">
            <img
                src={props.img}
                className="w-28 max-h-28 mx-auto rounded-lg"
                alt={props.name}
            ></img>
            <div className="mt-2">
                <h1 className="font-bold text-black dark:text-white  md:text-xl">
                    {props.name}
                </h1>
                <p className="font-light text-gray-400  md:text-lg">
                    {props.experience}{' '}
                </p>
            </div>
        </div>
    )
}
