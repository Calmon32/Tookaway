import React from 'react';
import { Card } from 'react-bootstrap'

function RestaurantCard(props) {
    return <div className="restaurant-card">
        <Card>
            <Card.Img style={{ backgroundColor: "lightgrey" }} variant="top" src="/chef.png" />
            <Card.ImgOverlay>
                <button onClick={() => {props.favorite(props.restaurant)}} className="fav-btn">
                    {props.restaurant.fav ?
                        <img className="fav-btn" src="/heart-full.png"></img>
                    :
                        <img className="fav-btn" src="/heart-empty.png"></img>
                    }
                </button>
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{props.restaurant.name}</Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>
                    Status: {props.restaurant.status}<br/>
                    BestMatch: {props.restaurant.sortingValues.bestMatch}<br/>
                    Newest: {props.restaurant.sortingValues.newest}<br/>
                    RatingAverage: {props.restaurant.sortingValues.ratingAverage}<br/>
                    Distance: {props.restaurant.sortingValues.distance}<br/>
                    Popularity: {props.restaurant.sortingValues.popularity}<br/>
                    AverageProductPrice: {props.restaurant.sortingValues.averageProductPrice}<br/>
                    DeliveryCosts: {props.restaurant.sortingValues.deliveryCosts}<br/>
                    MinCost: {props.restaurant.sortingValues.minCost}<br/>
                </Card.Text>
                <button className={`order-btn ${props.restaurant.status}`}>
                    <img className="status-icon" src={props.restaurant.status == "closed" ? "/closed.png" : 
                    props.restaurant.status == "open" ? "/scooter.png" : "/clock.png"}></img>
                    {props.restaurant.status == "closed" ? "Closed" : 
                    props.restaurant.status == "open" ? "Order Now" : "Order Ahead"}
                </button>
            </Card.Body>
        </Card> 
    </div>
}

export default RestaurantCard