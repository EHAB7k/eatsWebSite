export default function QrCard({
  img,
  name,
  experience,
  svgImageAndroid,
  svgImageApple,
  platform,
}) {
  return (
    <div className=" lg:w-10/12 md:w-10/12 xs:w-40  m-auto  p-2 text-center m-auto justify-center bg-white drop-shadow-lg border-dark-300 dark:bg-dark-300 rounded-md flex flex-col lg:h-48 xs:h-35 mt-5 mb-5">
      {' '}
      {/* <img
        src={img}
        className="w-28 max-h-28 mx-auto rounded-lg"
        alt={name}
      />{' '} */}
      <div className="mt-2">
        {' '}
        <h1 className="font-bold text-black dark:text-white md:text-xl">
          {name}
        </h1>{' '}
        <p className="font-light text-gray-400 md:text-lg">{experience}</p>{' '}
        {platform === 'android' ? (
          <img src={svgImageAndroid} className="w-17 h-9 m-auto" />
        ) : (
          <img src={svgImageApple} className=" w-17 h-9 m-auto" />
        )}{' '}
      </div>{' '}
    </div>
  )
}
