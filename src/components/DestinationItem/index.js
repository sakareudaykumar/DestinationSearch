// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachCard} = props
  const {name, imgUrl} = eachCard
  return (
    <li className="listContainer">
      <img className="imgSize" src={imgUrl} alt={name} />
      <p className="para"> {name}</p>
    </li>
  )
}
export default DestinationItem
