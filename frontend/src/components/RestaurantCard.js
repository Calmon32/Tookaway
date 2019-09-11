import React from 'react';
import { Card } from 'react-bootstrap'

function RestaurantCard(props) {
    let SortText = null;
    switch (props.sorting) {
        case "-1":
            SortText = `TopRestaurants: ${props.restaurant.sortingValues.topRestaurants}`
            break

        case "0":
            SortText = `BestMatch: ${props.restaurant.sortingValues.bestMatch}`
            break

        case "1":
            SortText = `Newest: ${props.restaurant.sortingValues.newest}`
            break

        case "2":
            SortText = `RatingAverage: ${props.restaurant.sortingValues.ratingAverage}`
            break

        case "3":
            SortText = `Distance: ${props.restaurant.sortingValues.distance}`
            break
        case "4":
            SortText = `Popularity: ${props.restaurant.sortingValues.popularity}`
            break

        case "5":
            SortText = `AverageProductPrice: ${props.restaurant.sortingValues.averageProductPrice}`
            break

        case "6":
            SortText = `DeliveryCosts: ${props.restaurant.sortingValues.deliveryCosts}`
            break

        case "7":
            SortText = `MinCost: ${props.restaurant.sortingValues.minCost}`
            break

        default:
            SortText = ``
            break
    }
    return <div className="restaurant-card">
        <Card>
            <Card.Img style={{ backgroundColor: "lightgrey" }} variant="top" src="/chef.png" />
            <Card.ImgOverlay>
                <button onClick={() => { props.favorite(props.restaurant) }} className="fav-btn">
                    {props.restaurant.fav ?
                        <img className="fav-btn" src="/heart-full.png" alt="favorite"></img>
                        :
                        <img className="fav-btn" src="/heart-empty.png" alt="not favorite"></img>
                    }
                </button>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{props.restaurant.name}</Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>
                    {SortText}
                </Card.Text>
                <button className={`order-btn ${props.restaurant.status}`}>
                    <img className="status-icon" src={props.restaurant.status === "closed" ? "/closed.png" :
                        props.restaurant.status === "open" ? "/scooter.png" : "/clock.png"} alt="status icon"></img>
                    {props.restaurant.status === "closed" ? "Closed" :
                        props.restaurant.status === "open" ? "Order Now" : "Order Ahead"}
                </button>
            </Card.Body>
        </Card>
    </div>
}

export default RestaurantCard