import React from 'react';
import RestaurantCard from './RestaurantCard'

let CardList = (props) => {
    return <div className="grid-container">
        <div className="card-grid">
            {sortRestaurants(props.restaurants, props.sorting, props.search)
                .map((restaurant, index) => {
                    return <RestaurantCard restaurant={restaurant} key={index} {...props} />
                })}
        </div>
    </div>
}

export let sortRestaurants = (restaurants, sortingType, searchString) => {
    return searchFilter(restaurants, searchString).sort((a, b) => {
        let afav = a.fav ? 0 : 1;
        let bfav = b.fav ? 0 : 1;

        let astatus = a.status === "closed" ? 2 :
            a.status === "open" ? 0 : 1;

        let bstatus = b.status === "closed" ? 2 :
            b.status === "open" ? 0 : 1;

        // Sort priority: Favorite > Opening status > value sorting
        return afav - bfav || astatus - bstatus || valueSorting(a, b, sortingType)
    })
}

export let searchFilter = (restaurants, searchString) => {
    if (searchString && searchString !== "") {
        return restaurants.filter((restaurant, index) => {
            return restaurant.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        })
    } else {
        return restaurants
    }
}

let valueSorting = (x, y, sorting) => {
    switch (sorting) {
        case "-1":
            return y.sortingValues.topRestaurants - x.sortingValues.topRestaurants

        case "0":
            return x.sortingValues.bestMatch - y.sortingValues.bestMatch

        case "1":
            return x.sortingValues.newest - y.sortingValues.newest

        case "2":
            return y.sortingValues.ratingAverage - x.sortingValues.ratingAverage

        case "3":
            return x.sortingValues.distance - y.sortingValues.distance

        case "4":
            return y.sortingValues.popularity - x.sortingValues.popularity

        case "5":
            return x.sortingValues.averageProductPrice - y.sortingValues.averageProductPrice

        case "6":
            return x.sortingValues.deliveryCosts - y.sortingValues.deliveryCosts

        case "7":
            return x.sortingValues.minCost - y.sortingValues.minCost

        default:
            return 0
    }
}

export default CardList