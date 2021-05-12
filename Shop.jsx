import * as React from 'react'

const Shop = (props) => {
    return (
        <div class="card m-4 w-50 pb-4">
            <h1 class="card-header">Shop</h1>
            <div class="d-flex justify-content-between flex-wrap">
                {props.productsList.map((product, index) => (
                    <div class="col-md-4 mt-4">
                        <div class="card">
                            <img
                                class="card-img-top"
                                src={product.image_url}
                                alt={product.name}
                            />
                            <div class="card-body">
                                <h5 class="card-title">
                                    <div class="d-flex justify-content-between">
                                        <span>{product.name}</span>
                                        <span>{product.price}$</span>
                                    </div>
                                </h5>
                                <button
                                    onClick={() => props.onBuy(product.name)}
                                    class="btn btn-primary"
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
