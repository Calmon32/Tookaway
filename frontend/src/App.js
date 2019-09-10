import React, { Component } from 'react'
import update from 'react-addons-update';
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import './styles/App.scss';

class App extends Component {

  constructor() {
    super()
    this.state = {
      restaurants: [],
      search: "",
      sortingBy: "-1",
      loading: true
    }
    this.favorites = {}
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleSortChange(event) {
    this.setState({
      sortingBy: event.target.value
    })
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value
    })
  }

  handleFavorite(restaurant) {
    let index = this.state.restaurants.indexOf(restaurant)
    this.setState(prevState => ({
      restaurants: update(prevState.restaurants, { [index]: { fav: { $set: !restaurant.fav } } })
    }))
    this.favorites[restaurant.name] = !restaurant.fav
    console.log(this.favorites)
    localStorage.setItem('favorite-restaurants', JSON.stringify(this.favorites))
  }

  componentDidMount() {
    let favorites = JSON.parse(localStorage.getItem('favorite-restaurants'))
    this.favorites = favorites
    fetch("http://localhost:8080/api").then((res) => {
      return res.json()
    }).then((data) => {
      data.restaurants.map((restaurant) => {
        let value = favorites[restaurant.name]
        restaurant.fav = value !== undefined ? value : false;
        restaurant.sortingValues.topRestaurants = ((restaurant.sortingValues.distance * restaurant.sortingValues.popularity) + restaurant.sortingValues.ratingAverage);
      })
      this.setState({
        restaurants: data.restaurants,
        loading: false
      })
    })
  }

  render() {
    return <div>
      <SearchBar changeSorting={this.handleSortChange} changeSearch={this.handleSearchChange}></SearchBar>
      <CardList loading={this.state.loading} favorite={this.handleFavorite} sorting={this.state.sortingBy} restaurants={this.state.restaurants} search={this.state.search}></CardList>
    </div>
  }
}

export default App;
