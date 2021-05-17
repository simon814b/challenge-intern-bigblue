# challenge-intern-bigblue

Hello, get yourself ready for this intern challenge ! :fire:

This README will present you the code, how to run it and the most important: your missions. 

## The code

This repository contains a src folders with 2 files `index.html` and `index.tsx` and 2 folders *Cart* and *Shop*. 

`index.html` is the HTML page that will be displayed on your browser when you run the code. But there is not much code in it. Indeed the "interesting" code is in the Javascript files whose root is the file `index.jsx` that imports the components `Cart` and `Shop` from the corresponding folders. 

Running this code (see how below) displays a page with a shop section and a cart section. 

The Shop section contains 6 products with their name, price, image and "Add to cart" button. 

The Cart section contains a table with all the items and how many has been added to cart. Clicking on "Add to cart" button in the Shop updates this number. 

*add picture*

The style is handled through the Bootstrap library. So the style is determined by all the `className=...` 
*talk about the style*

## How to run it

In order to run this code you need to get Node.js and npm. You can get both by downloading Node.js [here](https://nodejs.org/en/download/) and following the installation instructions. 
You can check that you have correctly installed Node.js and npm by running in your command terminal: 
```
node -v
npm -v
```

*what if it doesn't work, `get npm` ? `npm install -g npm@latest`?*

Then download this repository (ideally with a SSH key), go to the repo's root and run 
```
npm install
```
to install all the necessary packages. Finally you can run the code with the command
```
npm start
```

You will also need to run the backend. Here is how to do it. 

Download [this repository](https://github.com/mboumerdassi/bigblue-intern-challenge-backend). To start the server, open a terminal, go to the repo's root and run the following command: `run main.go` (*`go run products.go`* instead?). You can now start coding!

## Your missions

- Compute the total price of the products in the cart. 
- Add a button to remove some products from cart. 
- Show remaining stock of products in the shop (updates when clicking on Buy)
- Disable buying a product if there is no stock available anymore. 

You are free to do whatever you want concerning the design of what you add. You can reuse the style of already present components. 

Create a Pull Request in this repository with your code once you are done. 

Have fun :rocket: :wink:
