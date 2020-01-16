
<img align="center" src="logo-aa-2.png">

### GA's SEI Course Project #3: React Application
# Jeddah Guide 
<img align="center" src="Jeddah_Guide_Logo.PNG"></img>

## App Features
* Provide the user with navigation menu supported with an image to view pages showing different kinds of places (Restaurants, hotels, cafes ..etc)
* Provide the user with details related to the item/ place that the user clicks on, including the name and a brief description.
* Display the current weather in Jeddah.
* Display the place's location using a map.


## Installation
To install the react project, fork and clone this repository then use git bash terminal to run the command
``` npm install ``` followed by ``` npm start ``` to start the server after the installation process is finished.

## Technologies Used
* JavaScript
* JSX
* CSS
* HTML
* React
* React Strap
* React Bootstrap
* React Router Dom
* GitHub
* Axios
* Open Weather API
* React Bing Maps / Bing Maps API


## User Stories
* As a user, I should be able to navigate through different pages using the navigation menu.
* As a user, I should have the ability to click on an item on the navigation menu to be shown a list that corresponds to the item I clicked on.
* As a user, I should be able to click on an item/place of the currently viewed list to get more information about that item/place.
* As a user, I should be shown a map that points to the location of the place I chose to be displayed


## How it Works
### ``` App.js```
The main component rendered by ``` index.js```. It handles the display of the main navigation bar that allows the user to choose the type of place they wish to see a list of, whether it's a restaurant, cafe, hotel, a place or an activity. As well as taking care of the defining the routes to each one of the components responsible for displaying the corresponding list of places, which will be achieved when the user clicks on the link associated with that place.

### Components 
The application has 9 other components:
  * ``` Restaurant ```
  * ``` Cafes ```
  * ``` Hotels ```
  * ``` Places ```
  * ``` Activities ```
<br>Each one of the previous 5 components recieves a list that corresponds to the component name (sent by ``` App.js``` when routing to that component), for example: the ``` Restaurant ``` component will recieve a list of restaurants, the ``` Cafes ``` component will recieve a list of cafes, and so on.
<br>The main purpose of each one of the components is to display the list it recieves and enable the user to click on a specific item to display more information about it.
* ``` Display ```
<br> Displays information of the place/item chosen by the user from any of the previous components where it'll be rendered.
* ``` Show Carousel ```
<br> Rendered by the ``` Display ``` component to show multiple images of the currently displayed place/item using ``` Bootstrap Carousel ``` as part of the inormation related to that place.
* ``` NavbarMain ```
<br> returns the main bar shown at the very top of the website. Which includes the application name and logo, as well as a link to the homepage.
* ``` Map ```
Rendered by the ```Display ``` component, it handles showing a map pointing to the location of the currently displayed item/place as a marker on that map using Bing Maps API.

## Software Knights Team Members:
- Sarah Alahmadi
- Wardah Ahmed
- Doaa Turkistani
- Afnan Masrahi
- Abdullah Alshahrani

## Future Work
 * Upgrade the map to handle showing multiple markers representing branches of that place (if applicaple).
 * Replace Bing Maps API with Google Maps API.
 * Add the ability to users to sign up/ sign in.
 * Add the aility to users to add a place to a favorite list.


## Resources
<a href="https://github.com/sei-jed-10/W08D04-React-Router"> React-Router</a> <br>
<a href="https://reactstrap.github.io"> React Strap </a> <br>
<a href="https://reactstrap.github.io/components/navbar/"> React Strap - Navbar </a> <br>
<a href="https://react-bootstrap.github.io/getting-started/introduction"> React Bootstrap - Getting Started </a> <br>
<a href="https://react-bootstrap.netlify.com/components/cards/#cards"> React Bootstrap - Cards </a><br>
<a href="https://react-bootstrap.github.io/components/carousel/"> React Bootstrap- Carousels </a> <br>
<a href="https://openweathermap.org/api"> Weather API </a><br>
<a href="https://www.npmjs.com/package/react-bingmaps"> React-Bingmaps </a> <br>
<a href="https://help.github.com/en/github/writing-on-github/working-with-advanced-formatting"> GitHub- Advanced Formatting</a><br> 
<a href="https://github.com/sei-jed-10/React-App-Deployment-Steps"> React-App-Deployment-Steps </a>
