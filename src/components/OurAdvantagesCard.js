import PropTypes from 'prop-types'

function OurAdvantagesCard(props) {
  const { titleFirst, titleHighlight, advantages, details } = props
  return (
    <div
      dir="rtl"
      className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400 mt-20 mb-40 shadow-lg rounded-lg dark:bg-dark-300 "
    >
      <header className="text-center text-black mb-5 dark:text-gray-400 rounded-md bg-gradient-to-r p-2">
        <h1 className="mt-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
          {' '}
          {titleFirst}
          <span className="text-yellow-300 dark:text-yellow-400">
            {titleHighlight}
          </span>{' '}
        </h1>
      </header>
      {advantages.map(({ title, subitems }) => (
        <li className="mr-2" key={title}>
          {title}
          <ul className=" mt-2 space-y-2 list-disc list-inside mb-10 ">
            {subitems.map((subitem) => (
              <li className="mr-5" key={subitem}>
                {subitem}
              </li>
            ))}
          </ul>
        </li>
      ))}
      <br />
    </div>
  )
}

// OurAdvantagesCard.propTypes = {
//   titleFirst: PropTypes.string,
//   titleHighlight: PropTypes.string,
//   advantages: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       subitems: PropTypes.arrayOf(PropTypes.string),
//     })
//   ),
//   details: PropTypes.arrayOf(PropTypes.string),
// };

// OurAdvantagesCard.defaultProps = {
//   titleFirst: "",
//   titleHighlight: "",
//   advantages: [],
//   details: [],
// };

export default OurAdvantagesCard
