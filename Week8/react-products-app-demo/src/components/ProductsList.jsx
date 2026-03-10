import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function ProductsList() {


let [products, setProducts] = useState([])
let [loading, setLoading] = useState(true)
let [err, setError] = useState(null)
let [search, setSearch] = useState("")
const navigate = useNavigate()

const gotoProduct = (productObj) => {
    navigate("/product", { state: { product: productObj } })
}

useEffect(() => {
    async function getProducts() {
        try {
            let res = await fetch('https://fakestoreapi.com/products')
            if (res.status === 200) {
                let productsData = await res.json()
                setProducts(productsData)
            } else {
                throw new Error("Failed to fetch")
            }
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }
    getProducts()
}, [])

const searchText = search.trim().toLowerCase()

const filteredProducts = products.filter((productObj) =>
    productObj.title.toLowerCase().includes(searchText) ||
    productObj.category.toLowerCase().includes(searchText)
)

if (loading) {
    return (
        <p className='text-center text-lg font-semibold text-blue-500 mt-20'>
            Loading products...
        </p>
    )
}

if (err) {
    return (
        <p className='text-center text-lg font-semibold text-red-500 mt-20'>
            {err.message}
        </p>
    )
}

return (
    <div className="max-w-7xl mx-auto px-4">

        {/* Search Bar */}
        <div className='flex justify-center my-8'>
            <input
                className='w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                placeholder='Search by title or category...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {
                filteredProducts.map((productObj) => (
                    <div
                        onClick={() => gotoProduct(productObj)}
                        key={productObj.id}
                        className='bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col'
                    >

                        {/* Product Image */}
                        <img
                            src={productObj.image}
                            alt={productObj.title}
                            className="h-48 w-full object-contain mb-4"
                        />

                        {/* Product Title */}
                        <p className="font-semibold text-gray-800 line-clamp-2">
                            {productObj.title}
                        </p>

                        {/* Product Price */}
                        <p className="text-blue-600 font-bold text-lg mt-2">
                            ${productObj.price}
                        </p>

                    </div>
                ))
            }
        </div>

    </div>
)


}

export default ProductsList
