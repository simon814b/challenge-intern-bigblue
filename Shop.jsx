import * as React from 'react'

const Shop = (props) => {
    return (
        <div className="card m-4 w-50 pb-4">
            <h1 className="card-header">Shop</h1>
            <div className="d-flex justify-content-between flex-wrap">
                {props.productsList.map((product, index) => (
                    <div className="col-md-4 mt-4" key={index}>
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={product.image_url}
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <div className="d-flex justify-content-between">
                                        <span>{product.name}</span>
                                        <span>{product.price}$</span>
                                    </div>
                                </h5>
                                <button
                                    onClick={() => props.onBuy(product.name)}
                                    className="btn btn-primary"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Shop }
