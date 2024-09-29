// Write your code here
import './index.css'

const SuggestionsList = props => {
  const {eachListDetails, toSetSearchInput} = props
  const {suggestion} = eachListDetails

  const onSetInput = () => {
    toSetSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item-list">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-button" type="button" onClick={onSetInput}>
        <img
          className="arrow-img"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionsList
