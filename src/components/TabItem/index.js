// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, tabChanged} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    tabChanged(tabId)
  }

  return (
    <li>
      <p className="list-para-style" onClick={changeTab}>
        {displayText}
      </p>
    </li>
  )
}
export default TabItem
