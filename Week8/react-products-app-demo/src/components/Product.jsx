import { useLocation } from "react-router"

function Product() {


const { state } = useLocation()

if (!state) {
    return (
        <p className="text-center text-red-500 text-lg mt-20">
            Product not found
        </p>
    )
}

return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div className="flex justify-center">
            <img
                src={state?.product?.image}
                alt={state?.product?.title}
                className="w-full max-w-sm h-96 object-contain"
            />
        </div>

        {/* Product Details */}
        <div className="space-y-6">

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {state?.product?.title}
            </h1>

            <p className="text-gray-600 leading-relaxed">
                {state?.product?.description}
            </p>

            <p className="text-3xl font-bold text-blue-600">
                ${state?.product?.price}
            </p>

            <p className="text-lg text-gray-500 capitalize">
                Category: {state?.product?.category}
            </p>

        </div>

    </div>
)


}

export default Product
