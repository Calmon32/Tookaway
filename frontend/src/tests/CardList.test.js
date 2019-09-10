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

it('sorts restaurants properly',() => {
    const restaurants = [{
		"name": "Tanoshii Sushi",
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
    }]
    const sortedRestaurants = [{
		"name": "Tandoori Express",
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
    }]
    expect(sortRestaurants(restaurants,0)).toEqual(sortedRestaurants);
})