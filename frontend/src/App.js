import React, { Component } from 'react'
import update from 'react-addons-update';
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import './styles/App.scss';
import fakeData from './restaurants.json';

class App extends Component {

  constructor() {
    super()
    this.state = {
      restaurants: [],
      favorites: {},
      search: "",
      sortingBy: "-1",
      loading: true
    }
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
    this.setState(prevState => {
      let favs = prevState.favorites
      favs[restaurant.name] = !restaurant.fav
      return {
        restaurants: update(prevState.restaurants, { [index]: { fav: { $set: !restaurant.fav } } }),
        favorites: favs
      }
    }, () => {
      console.log(this.state.favorites)
      localStorage.setItem('favorite-restaurants', JSON.stringify(this.state.favorites))
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/api").then((res) => {
      return res.json()
    }).then((data) => {
      this.loadData(data)
    }).catch(err => {
      console.log("Failed to fetch data. Using fake data.")
      this.loadData(fakeData)
    })
  }

  loadData(data) {
    let favorites = JSON.parse(localStorage.getItem('favorite-restaurants'))
    if (!favorites) favorites = {}
    data.restaurants.map((restaurant) => {
      let value = favorites[restaurant.name]
      restaurant.fav = value !== undefined ? value : false;
      restaurant.sortingValues.topRestaurants = ((restaurant.sortingValues.distance * restaurant.sortingValues.popularity) + restaurant.sortingValues.ratingAverage);
    })
    this.setState({
      restaurants: data.restaurants,
      favorites: favorites,
      loading: false
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
