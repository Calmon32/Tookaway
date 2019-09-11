import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with data", async () => {
    const restaurants = {
        restaurants: [
            {
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
            }, {
                "name": "Tandoori Express",
                "status": "closed",
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
                "name": "Royal Thai",
                "status": "order ahead",
                "sortingValues": {
                    "bestMatch": 2.0,
                    "newest": 133.0,
                    "ratingAverage": 4.5,
                    "distance": 2639,
                    "popularity": 44.0,
                    "averageProductPrice": 1492,
                    "deliveryCosts": 150,
                    "minCost": 2500
                }
            }
        ]
    }

    // Spy on fetch to simulate an API call for restaurant data
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(restaurants)
        })
    );

    await act(async () => {
        render(<App />, container);
    });

    expect(container.textContent).toContain(restaurants.restaurants[0].name);
    expect(container.textContent).toContain(restaurants.restaurants[1].name);
    expect(container.textContent).toContain(restaurants.restaurants[2].name);

    global.fetch.mockRestore();
});