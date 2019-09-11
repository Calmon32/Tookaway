Takeaway Assignment by Lucas Calmon

To get the sample project working follow these steps:

* - You must have installed Node.js to run the server!
1 - Open a cmd prompt/terminal in the "Tookaway/backend" folder
2 - Run "npm install"
3 - Run "npm start"
4 - Navigate to the url "localhost:3000" or "127.0.0.1:3000" on your browser

To run the tests:

1 - Open a cmd prompt/terminal in the "Tookaway/frontend" folder
2 - run "npm install"
3 - run "npm run test"

The frontend was made with React.js. It features all the requested requirements and it also has persistent storage of the users favorite restaurants through local browser storage. The opening status of each restaurant can be seen by the "Order Now" / "Order Ahead" / "Closed" buttons and it always displays the sort value of each restaurant for the current sorting method.

The backend was made with Node.js. It serves the production-ready, static files built from the frontend and it also has an "/api" endpoint, which the frontend requests the restaurant list from. 

All the sorting logic can be found on the frontend, on the component CardList.js, which is responsible for receiving the array of restaurants, sorting them according to the selected sort and then displaying each restaurant in a individual RestaurantCard.js.

The skeleton of the backend was built using express-generator to avoid re-writing boilerplate code and for frontend I used create-react-app for the same reason.