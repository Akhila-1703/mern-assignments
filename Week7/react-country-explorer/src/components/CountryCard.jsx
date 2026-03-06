function CountryCard(props) {

    //receive country
    let country = props.country

    return (
        <div className="border p-3 w-64">

            <img 
                src={country.flags.png} 
                alt={country.name.common}
                className="w-full h-32"
            />

            <h2 className="font-bold mt-2">
                {country.name.common}
            </h2>

            <p className="text-sm">
                Capital: {country.capital ? country.capital[0] : "N/A"}
            </p>

            <p className="text-sm">
                Population: {country.population}
            </p>

            <p className="text-sm">
                Region: {country.region}
            </p>

        </div>
    )
}

export default CountryCard