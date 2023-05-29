// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {
    search: '',
  }

  searchInput = event => {
    const letter = event.target.value
    this.setState({search: letter})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(search),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="inputCard"
            placeholder="search"
            onChange={this.searchInput}
            value={search}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search"
          />
        </div>
        <ul className="cards">
          {searchResults.map(eachCard => (
            <DestinationItem eachCard={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
