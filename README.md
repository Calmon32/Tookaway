# Tookaway

To get the sample project working follow these steps:

1. You must have installed Node.js to run the server!
2. Open a cmd prompt/terminal in the ```backend``` folder
3. Run ```npm install```
4. Run ```npm start```
5. Navigate to the url ```localhost:3000``` or ```127.0.0.1:3000``` on your browser

To run the tests:

1. Open a cmd prompt/terminal in the ```frontend``` folder
2. run ```npm install```
3. run ```npm run test```

The frontend was made with React.js. It features persistent storage of the users favorite restaurants through local browser storage. The opening status of each restaurant can be seen by the "Order Now" / "Order Ahead" / "Closed" buttons and it always displays the sort value of each restaurant for the current sorting method.

The backend was made with Node.js. It serves the production-ready, static files built from the frontend and it also has an ```/api``` endpoint, which the frontend requests the restaurant list from. 

All the sorting logic can be found on the frontend, on the component CardList.js, which is responsible for receiving the array of restaurants, sorting them according to the selected sort and then displaying each restaurant in a individual RestaurantCard.js component.

The skeleton of the backend was built using express-generator to avoid re-writing boilerplate code and for the frontend I used create-react-app for the same reason.
