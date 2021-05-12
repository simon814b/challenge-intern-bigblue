import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Cart } from './Cart'
import { Shop } from './Shop'

const App = () => {
    React.useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((response) => response.json())
            .then((products) => {
                setProductsList(products.products)
            })
    }, [])

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

ReactDOM.render(<App />, document.getElementById('root'))
