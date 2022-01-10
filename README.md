# Test Bsale

Challenge Project for application to Bsale

Headless project:

- [Backend NodeJS / Express connected to MySQL database](https://github.com/chescobarf/Bsale-Chescobar-Back)

- [Frontend Vainilla JS](https://github.com/chescobarf/Bsale-Chescobar-Front)


## Backend

Hosted in:
[https://api-bsale-test-chescobar.herokuapp.com/](https://api-bsale-test-chescobar.herokuapp.com/)

### Backend Usage

To raise the project make use of:
```
npm start
```
I recommend that if you use a dev environment use a nodemon
```
nodemon app.js
```
### Backend Explanation

The backend of this application as mentioned is made in **NodeJS with Express**.

Inside we have our main file, which raises the server are in [app.js](https://github.com/chescobarf/Bsale-Chescobar-Back/blob/master/app.js)

The application is based on a [routes](https://github.com/chescobarf/Bsale-Chescobar-Back/tree/master/routes) model where **it makes calls according to the route to the different [controllers](https://github.com/chescobarf/Bsale-Chescobar-Back/tree/master/controllers).**
These configured to **make SQL calls to the DB**

### Available routes
We have different calls to our API, including for products and categories

#### Products

> 	**/products**
> This route gives us a list of all the products that exist
> 
> 	**/products/:id**
> Returns the specific product based on the id
> 
>**/products/category/:id**
> Returns the list of products of a category (category id is given to search)	
> 
>**/products/search/:term**
> Search engine, according to the terms delivered, returns the products with which it matches

#### Categories

> 	**/categories**
> This route gives us a list of all the categories that exist
> 
> 	**/categories/:id**
> Returns the specific category based on the id


## Frontend
On the front side we have a simple website in **Vanilla JS**.
For this as a complement, **Tailwind CSS** and some components of its website were used.

[Production Site](https://bsale-test-chescobar.netlify.app/)

### Frontend Usage
To make changes or modifications in the html by making modifications in the CSS, it is necessary to make use of:

    npx tailwindcss -i ./src/input.css -o ./src/main.css --watch

In this way we leave tailwind in listening mode so that it can modify the new css file for production: [/src/main.css](https://github.com/chescobarf/Bsale-Chescobar-Front/blob/master/src/main.css)

### Frontend Explanation
The front was created based on 3 views.

 - [Home](https://github.com/chescobarf/Bsale-Chescobar-Front/blob/master/index.html)
 - [PLP for Category](https://github.com/chescobarf/Bsale-Chescobar-Front/blob/master/category.html)
 - [PDP](https://github.com/chescobarf/Bsale-Chescobar-Front/blob/master/product.html)
 
Additionally we have an [index.js](https://github.com/chescobarf/Bsale-Chescobar-Front/blob/master/index.js) who is responsible for  **fetch data, rendering, and optimization of calls** based on the URL (tried a bit to make useParams from React similar)

#### Index.js

Explaining this last point,
inside the index js file we clearly have the logic of the site. **Here I would like to highlight how this optimized calls is made according to the route we are on.**

**A "switch" was created that according to the** `window.location.pathname` that we obtain, one or the other call is made, that is:

- If we are in the **root URL** (/) **this will call first of all the categories** (for the navbar) **and all the products**.

- On the other hand, **if we are on a product page**, we will **only bring the information of that product**

 *In other words, we are no longer called to all products, so we optimize this call that in the future could have hundreds or thousands of products that would generate an excessive use of resources.*

#### Fetch
To make calls to the API, Fetch is used and in this case, for the calls that need parameters, we use **URLSearchParams**
Where it will **read if the params contain** **"product"** or **"category"** in this case they would become the IDs of what is needed and either **the products such as the categories at the time of rendering have the predefined href to make use of these params**
