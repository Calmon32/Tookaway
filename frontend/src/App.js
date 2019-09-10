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
      favorites: {},
      search: "",
      sortingBy: "0",
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
    let currentValue = this.state.favorites[restaurant.name];
    let index = this.state.restaurants.indexOf(restaurant)
    this.setState({
      restaurants: update(this.state.restaurants, {[index]: {fav: {$set: !restaurant.fav}}})
    })
    this.state.favorites[restaurant.name] = !restaurant.fav
    console.log(this.state.favorites)
    localStorage.setItem('favorite-restaurants', JSON.stringify(this.state.favorites))
  }

  componentDidMount() {
    let favorites = JSON.parse(localStorage.getItem('favorite-restaurants'))
    this.setState({
      favorites: favorites
    })
    fetch("http://localhost:8080/api").then((res) => {
      return res.json()
    }).then((data) => {
      data.restaurants.map((restaurant) => {
        let value = favorites[restaurant.name]
        restaurant.fav = value != undefined ? value : false;
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
      { this.state.search == "" ? 
      <CardList loading={this.state.loading} favorite={this.handleFavorite} sorting={this.state.sortingBy} restaurants={this.state.restaurants}></CardList>
      :
      <p>Hello</p>
      }
    </div>
  }
}

export default App;
