function Product(props) {

    //receiving product
    let product = props.product

    return (
        <div className="border p-3 w-64">

            {/* product image */}
            <img src={product.image} alt={product.name} className="w-full h-40" />

            {/* product name */}
            <h2 className="font-bold mt-2">{product.name}</h2>

            {/* brand */}
            <p className="text-sm">{product.brand}</p>

            {/* description */}
            <p className="text-sm mt-1">{product.description}</p>

            {/* price */}
            <p className="mt-2 font-semibold">${product.price}</p>

        </div>
    )
}

export default Product