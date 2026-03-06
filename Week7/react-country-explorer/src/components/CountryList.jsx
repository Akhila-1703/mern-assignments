import CountryCard from "./CountryCard.jsx"

function CountryList(props) {

    return (
        <div className="flex flex-wrap gap-4 mt-4">

            {
                props.countries.map((countryObj, index) => {
                    return <CountryCard key={index} country={countryObj} />
                })
            }

        </div>
    )
}

export default CountryList