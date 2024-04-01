// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails
  return (
    <li className="app-list-item">
      <img src={imageUrl} alt={category} className="app-image-sizing" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
