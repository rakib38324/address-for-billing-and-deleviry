import React, { useEffect, useState } from 'react';

const Addresses = () => {



   
    const [countries, setCountries] = useState([]);
    const [countryvalue, setCountryValue] = useState('');

    const [division, setDivisions] = useState([]);
    const [divisionvalue, setdivisionValue] = useState('');

    // console.log(divisions.divisions)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setCountries(data)
            }
            );
    }, [])

    
    const handleInputCountry = (event) => {
        setCountryValue(event.target.value)
        // console.log(event.target.value)
    }

    const onSearchCountry = (searchCountry) => {
        setCountryValue(searchCountry)
    }


    


    useEffect(() => {
        fetch("bddivisions.json")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setDivisions(data)
            }
            );
    }, [])

    const handleInputDivision = (event) => {
        setdivisionValue(event.target.value)
        // console.log(event.target.value)
    }

    const onSearchDivision = (searchCountry) => {
        setdivisionValue(searchCountry)
    }


// console.log(divisions)

    return (
        <div>
            {/* Country selection */}
            <div>
                <div>
                    <input type='text' value={countryvalue} placeholder='Select Country' onChange={handleInputCountry}></input>
                </div>
                <div>
                    {
                        countries.length && countries?.filter(country => {
                            const searchCountry = countryvalue.toLowerCase();
                            const countryName = country.name.common.toLowerCase();

                            return searchCountry && countryName.startsWith(searchCountry) && countryName !== searchCountry
                        }).slice(0, 5)
                            .map(country => <div key={country.id} onClick={() => onSearchCountry(country.name.common)}>{country.name.common}</div>)
                    }
                </div>


            </div>





            {/* District selection */}
            <div>

                <div>
                    <input type='text' value={divisionvalue} placeholder='Select Division' onChange={handleInputDivision}></input>
                </div>
                <div>
                    {   
                        division.divisions?.length && division.divisions?.filter(division => {
                            const searchdivision = divisionvalue.toLowerCase();
                            const divisionName = division.name.toLowerCase();
                            console.log(division)
                            return searchdivision && divisionName.startsWith(searchdivision) && divisionName !== searchdivision
                        }).slice(0, 5)
                        .map((division)=>(
                            <div key={division.id} onClick={() => onSearchDivision(division.name)}>{division.name}</div>
                        ))
                        
                        
                    }
                </div>
                

<h1>Hello</h1>


            </div>

        </div>
    );
};

export default Addresses;