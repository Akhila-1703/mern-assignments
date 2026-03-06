import { useEffect, useRef } from "react"

function SearchBar(props) {

    const searchInput = useRef(null)
    const debounceTimer = useRef(null)

    useEffect(() => {
        if (searchInput.current) {
            searchInput.current.focus()
        }
    }, [])

    const handleChange = (event) => {

        const value = event.target.value

        
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current)
        }

        debounceTimer.current = setTimeout(() => {
            props.setQuery(value)
        }, 500)
    }

    return (
        <div className="mt-4">
            <input
                type="text"
                placeholder="Search for a country..."
                ref={searchInput}
                onChange={handleChange}
                className="border p-2 w-full rounded"
            />
        </div>
    )
}

export default SearchBar