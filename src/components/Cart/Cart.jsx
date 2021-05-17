import * as React from 'react'

const Cart = (props) => {
    return (
        <div className="card w-50 m-4 pb-4">
            <h1 className="card-header">Shopping Cart</h1>
            <table className="table">
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
                            <td>{props.inCartProductsList[product.id]}</td>
                            <td>{product.price}$</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <span className="mx-auto">Total: {}$</span>
        </div>
    )
}

export { Cart }
