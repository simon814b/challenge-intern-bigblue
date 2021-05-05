import * as React from 'react'

const Shop = (props) => {
    return (
        <div
            style={{
                width: '50%',
                aspectRatio: '1',
                margin: '30px',
                padding: '30px',
                border: '2px solid black',
            }}
        >
            <h1>Shop</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                {props.productsList.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            width: '25%',
                            height: '25%',
                            margin: '10px',
                            padding: '20px 30px',
                            border: '2px solid black',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>{product.name}</span>
                            <span>{product.price}$</span>
                        </div>
                        <div>
                            <img
                            //       style={{
                            //         display: 'flex',
                            //       height: '75%',
                            //     width: '75%',
                            //   margin: 'auto',
                            //  }}
                            //     src={product.image}
                            />
                        </div>
                        <button onClick={() => props.onBuy(product.name)}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Shop }
