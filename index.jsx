import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Cart } from './Cart'
import { Shop } from './Shop'

const App = () => {
    const productsList = [
        {
            name: 'product 1',
            price: 10,
            initialStock: 20,
            image:
                'https://img-0.journaldunet.com/pb5J23IF99HMY_P9HtO64G38epM=/1240x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg',
        },
        {
            name: 'product 1 in blue',
            price: 11,
            initialStock: 5,
            image: 'product1blue.webp',
        },
        {
            name: 'product 2',
            price: 15,
            initialStock: 10,
            image: 'product2.webp',
        },
        {
            name: 'product 2 big',
            price: 30,
            initialStock: 10,
            image: 'product2big.webp',
        },
        {
            name: 'product 3',
            price: 7.5,
            initialStock: 20,
            image: 'product3.webp',
        },
        {
            name: 'product 4',
            price: 100,
            initialStock: 2,
            image: 'product4.webp',
        },
    ]

    const initialInShopProducts = {
        ['product 1']: 20,
        ['product 1 in blue']: 5,
        ['product 2']: 10,
        ['product 2 big']: 10,
        ['product 3']: 20,
        ['product 4']: 2,
    }

    const initialInCartProducts = {
        ['product 1']: 0,
        ['product 1 in blue']: 0,
        ['product 2']: 0,
        ['product 2 big']: 0,
        ['product 3']: 0,
        ['product 4']: 0,
    }

    const [inShopProducts, setInShopProducts] = React.useState(
        initialInShopProducts
    )
    const [inCartProducts, setInCartProducts] = React.useState(
        initialInCartProducts
    )

    const onBuy = (productId) => {
        const inShopBeforeBuy = inShopProducts[productId]
        setInShopProducts({
            ...inShopProducts,
            [productId]: inShopBeforeBuy - 1,
        })
        const inCartBeforeBuy = inCartProducts[productId]
        setInCartProducts({
            ...inCartProducts,
            [productId]: inCartBeforeBuy + 1,
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Shop productsList={productsList} onBuy={onBuy} />
            <Cart
                productsList={productsList}
                inCartProductsList={inCartProducts}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
