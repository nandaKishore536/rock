import './index.css'

const Parts = props => {
  const {choicesListItems} = props

  const {imageUrl, id} = choicesListItems

  return <img src={imageUrl} alt={id} className="image" />
}

export default Parts
