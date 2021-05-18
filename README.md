# challenge-intern-bigblue

Hello, get yourself ready for this intern challenge ! :fire:

This README will present you the code, how to run it and the most important: your missions. 

## The code

This repository contains a src folder with 2 files `index.html` and `index.tsx` and 2 folders *Cart* and *Shop*. 

`index.html` is the HTML page that will be displayed on your browser when you run the code. But there is not much code in it. Indeed the "interesting" code is in the Javascript files whose root is the file `index.jsx` that imports the components `Cart` and `Shop` from the corresponding folders. 

Running this code (see how below) displays a page with a shop section and a cart section. 

The Shop section contains 6 products with their name, price, image and "Add to cart" button. 

The Cart section contains a table with all the items and how many has been added to cart. Clicking on "Add to cart" button in the Shop updates this number. 

<img width="1438" alt="image" src="https://user-images.githubusercontent.com/48725727/118610522-1f316e80-b7bc-11eb-9975-188354a3a573.png">

The style is handled through the Bootstrap library. So the style is determined by all the `className=...`. You don't have to take care of that except if you want to reuse some style for what you add in the code. 


## How to run it

In order to run this code you need to get Node.js and npm. You can get both by downloading Node.js [here](https://nodejs.org/en/download/) and following the installation instructions. 
You can check that you have correctly installed Node.js and npm by running in your command terminal: 
```
node -v
npm -v
```

If npm was not installed, try installing it with: 
```
npm install -g npm
```

Then download this repository (by downloading the .zip and extracting it for example), go to the `intern/frontend/` and run 
```
npm install
```
to install all the necessary packages. Finally you can run the code with the command
```
npm start
```
Frontend is now running. 

You will also need to run the backend. To start the server, open a new terminal, go to `intern/backend` and run the following command: `go run products.go`. 

You can now start coding!

## Your missions

- Compute the total price of the products in the cart. 
- Add a button to remove some products from cart. 
- Show remaining stock of products in the shop (updates when clicking on Buy)
- Disable buying a product if there is no stock available anymore. 
- Remove an item line from the cart if there is none of it in the cart. 

You are free to do whatever you want concerning the design of what you add but try to make it look good. You can reuse the style of already present components. 

You must submit the project as a git repository (github.com, bitbucket.com, gitlab.com). Repository must avoid containing the words bigblue and challenge. 

Have fun :rocket: :wink:
