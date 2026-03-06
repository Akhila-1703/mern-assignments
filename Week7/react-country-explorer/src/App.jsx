import './App.css'
import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar.jsx"
import CountryList from "./components/CountryList.jsx"

function App() {

    //state
    let [countries, setCountries] = useState([])
    let [filtered, setFiltered] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let [query, setQuery] = useState("")

    //fetch all countries
    useEffect(() => {
        setLoading(true)

        fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
        .then((res) => res.json())
        .then((data) => {
            setCountries(data)
            setFiltered(data)
            setLoading(false)
        })
        .catch(() => {
            setError("Failed to fetch countries")
            setLoading(false)
        })
    }, [])

    //search filter
    useEffect(() => {
        let result = countries.filter((country) => 
            country.name.common.toLowerCase().includes(query.toLowerCase())
        )
        setFiltered(result)
    }, [query, countries])

    return (
        <div className="p-4">

            <h1 className="text-2xl font-bold text-center">Country Explorer</h1>

            <SearchBar setQuery={setQuery} />

            {loading && <p className="mt-4">Loading...</p>}

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {!loading && !error && <CountryList countries={filtered} />}

        </div>
    )
}

export default App