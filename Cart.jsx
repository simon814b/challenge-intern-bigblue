import * as React from 'react'

const Cart = (props) => {
    return (
        <div class="card w-50 m-4 pb-4">
            <h1 class="card-header">Shopping Cart</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productsList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{props.inCartProductsList[product.name]}</td>
                            <td>{product.price}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span class="mx-auto">Total: {}$</span>
        </div>
    )
}

export { Cart }
