import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Cart } from './components/Cart/Cart'
import { Shop } from './components/Shop/Shop'

const App = () => {
    const [productsList, setProductsList] = React.useState([])
    const [availableProducts, setAvailableProducts] = React.useState([])
    const [inCartProducts, setInCartProducts] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8080/products')
            .then((response) => response.json())
            .then((products) => {
                setProductsList(products.products)
            })
    }, [])

    React.useEffect(() => {
        const initialAvailableProducts = productsList.reduce((acc, curr) => {
            return { ...acc, [curr.id]: curr.initial_stock } //a changer en stock
        }, {})
        const initialInCartProducts = productsList.reduce((acc, curr) => {
            return { ...acc, [curr.id]: 0 } //a changer en stock
        }, {})

        setAvailableProducts(initialAvailableProducts)
        setInCartProducts(initialInCartProducts)
    }, [productsList])

    const onAddToCart = (productId) => {
        const availableBeforeAdd = availableProducts[productId]
        setAvailableProducts({
            ...availableProducts,
            [productId]: availableBeforeAdd - 1,
        })
        const inCartBeforeAdd = inCartProducts[productId]
        setInCartProducts({
            ...inCartProducts,
            [productId]: inCartBeforeAdd + 1,
        })
    }

    return (
        <div className="d-flex justify-content-between">
            <Shop productsList={productsList} onAddToCart={onAddToCart} />
            <Cart
                productsList={productsList}
                inCartProductsList={inCartProducts}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
