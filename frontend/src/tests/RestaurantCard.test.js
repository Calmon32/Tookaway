import React from 'react'
import { shallow } from 'enzyme'
import RestaurantCard from '../components/RestaurantCard'

it('renders RestaurantCards without crashing', () => {
    const div = document.createElement('div')
    let restaurant = {
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
    }
    let index = 1
    shallow(<RestaurantCard restaurant={restaurant} key={index} />)
})
