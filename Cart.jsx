import * as React from 'react'

const Cart = (props) => {
    return (
        <div
            style={{
                width: '50%',
                margin: '30px',
                padding: '30px',
                border: '2px solid black',
            }}
        >
            <h1>Shopping Cart</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ width: '20%' }}>Item</span>
                <span>Quantity</span>
                <span style={{ width: '10%', textAlign: 'right' }}>Price</span>
            </div>
            {props.productsList.map((product, index) => (
                <div
                    key={index}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <span style={{ width: '20%' }}>{product.name}</span>
                    <span>{props.inCartProductsList[product.name]}</span>
                    <span style={{ width: '10%', textAlign: 'right' }}>
                        {product.price}$
                    </span>
                </div>
            ))}
            <span>Total: {}$</span>
        </div>
    )
}

export { Cart }
