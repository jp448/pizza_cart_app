# pizza_cart_app
 A coding FE Challenge for adelphi

**Introduction**

This app was created for the adelphi FE coding challenge. It is a pizza ordering app that uses react as a frontend framework. 

**Demo**

[pizza cart](https://pizza-cart.proctor-webworks.com/)

**Plugins used**
* react-router-dom

**App Features**
* responsive design for desktop and mobile
* landing page to welcome user
* pizza order takes place in three steps (style, dough type, toppings)
* the user is show the state of their pizza
* user can select and unselect topings (cheese is by default selected
* a navigation bar shows the user the steps the user can go back to change order but not skip forward
* a total price is calculated as items are added to cart
* a vegitarian option can be selected and unselected
* order needs to be confirmed before accepted
* json appears in console once order is accepted

**App Structure**

The app is split into several different components. An index component as usual. An app component which renders all components and includes the data structure. A home component which includes the landing page, and order component that makes up the order pages, and a checkout component to create the checkout page. There is a nav component which includes the stepper and is included on the order and checkout pages. A pizza state component which shows the user their pizza (which toppings, what style etc.) which is included the in the order and checkout pages. There is also a card component which is loaded in the order pages. 

**App Improvements**

If I had more time here are the improvements I would make to the app: 
* Improve code by refactoring (especially the app component- where I would removed the data). 
* Add tests.
* Make design a bit more unique (right now just basic css and html)
* make components rely less on text and more on visual aids
* use the redux store (was not enough time to implement this)

**Thought Process**
I used react as a framework as it is the javascript frontend framework I have the most experience with. I used state to save the pizza order data in between renders. State acts as a replacement for a redux store- I was too unfamilar with redux to implement the redux store in the time frame given, would be very interested in learning more about redux in the furture. The design is quite basic as I focused more on functionality. 

