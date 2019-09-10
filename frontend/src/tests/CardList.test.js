import React from 'react'
import { shallow } from 'enzyme'
import CardList, { sortRestaurants } from '../components/CardList'

it('renders without crashing', () => {
    let restaurants = [{
        "name": "Tanoshii Sushi",
        "status": "open",
        "sortingValues": {
            "bestMatch": 0.0,
            "newest": 96.0,
            "ratingAverage": 4.5,
            "distance": 1190,
            "popularity": 17.0,
            "averageProductPrice": 1536,
            "deliveryCosts": 200,
            "minCost": 1000
        }
    }]
    shallow(<CardList restaurants={restaurants} />);
})

it('sorts restaurants properly', () => {
    let restaurants = []
    let sortedRestaurants = []

    // Best match
    restaurants = [
        {
            "name": "Tanoshii Sushi",
            "fav": false,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 0.0,
                "newest": 96.0,
                "ratingAverage": 4.5,
                "distance": 1190,
                "popularity": 17.0,
                "averageProductPrice": 1536,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }, {
            "name": "Tandoori Express",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 1.0,
                "newest": 266.0,
                "ratingAverage": 4.5,
                "distance": 2308,
                "popularity": 123.0,
                "averageProductPrice": 1146,
                "deliveryCosts": 150,
                "minCost": 1300
            }
        }
    ]
    sortedRestaurants = [
        {
            "name": "Tandoori Express",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 1.0,
                "newest": 266.0,
                "ratingAverage": 4.5,
                "distance": 2308,
                "popularity": 123.0,
                "averageProductPrice": 1146,
                "deliveryCosts": 150,
                "minCost": 1300
            }
        }, {
            "name": "Tanoshii Sushi",
            "fav": false,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 0.0,
                "newest": 96.0,
                "ratingAverage": 4.5,
                "distance": 1190,
                "popularity": 17.0,
                "averageProductPrice": 1536,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }
    ]
    expect(sortRestaurants(restaurants, "0", "")).toEqual(sortedRestaurants);

    // Newest
    let poprestaurants = [
        {
            "name": "Tanoshii Sushi",
            "fav": false,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 0.0,
                "newest": 96.0,
                "ratingAverage": 4.5,
                "distance": 1190,
                "popularity": 17.0,
                "averageProductPrice": 1536,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }, {
            "name": "Tandoori Express",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 1.0,
                "newest": 266.0,
                "ratingAverage": 4.5,
                "distance": 2308,
                "popularity": 123.0,
                "averageProductPrice": 1146,
                "deliveryCosts": 150,
                "minCost": 1300
            }
        }, {
            "name": "Daily Sushi",
            "fav": true,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 9.0,
                "newest": 221.0,
                "ratingAverage": 4.0,
                "distance": 1911,
                "popularity": 6.0,
                "averageProductPrice": 1327,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }, {
            "name": "CIRO 1939",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 12.0,
                "newest": 231.0,
                "ratingAverage": 4.5,
                "distance": 3957,
                "popularity": 79.0,
                "averageProductPrice": 1762,
                "deliveryCosts": 99,
                "minCost": 1300
            }
        }
    ]
    let popsortedRestaurants = [
        {
            "name": "Daily Sushi",
            "fav": true,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 9.0,
                "newest": 221.0,
                "ratingAverage": 4.0,
                "distance": 1911,
                "popularity": 6.0,
                "averageProductPrice": 1327,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }, {
            "name": "CIRO 1939",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 12.0,
                "newest": 231.0,
                "ratingAverage": 4.5,
                "distance": 3957,
                "popularity": 79.0,
                "averageProductPrice": 1762,
                "deliveryCosts": 99,
                "minCost": 1300
            }
        }, {
            "name": "Tandoori Express",
            "fav": false,
            "status": "open",
            "sortingValues": {
                "bestMatch": 1.0,
                "newest": 266.0,
                "ratingAverage": 4.5,
                "distance": 2308,
                "popularity": 123.0,
                "averageProductPrice": 1146,
                "deliveryCosts": 150,
                "minCost": 1300
            }
        }, {
            "name": "Tanoshii Sushi",
            "fav": false,
            "status": "closed",
            "sortingValues": {
                "bestMatch": 0.0,
                "newest": 96.0,
                "ratingAverage": 4.5,
                "distance": 1190,
                "popularity": 17.0,
                "averageProductPrice": 1536,
                "deliveryCosts": 200,
                "minCost": 1000
            }
        }
    ]
    expect(sortRestaurants(poprestaurants, "1", "")).toEqual(popsortedRestaurants);
})
