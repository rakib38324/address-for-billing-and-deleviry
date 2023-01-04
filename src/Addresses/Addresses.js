import React, { useEffect, useState } from 'react';

const Addresses = () => {



   
    const [countries, setCountries] = useState([]);
    const [countryvalue, setCountryValue] = useState('');

    const [divisions, setDivisions] = useState('');
    const [divisionvalue, setdivisionValue] = useState('');


    useEffect(() => {
        fetch('bd-divisions.json')
            .then(response => response.json())
            .then(data => {

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
        fetch('bd-divisions.json')
            .then(response => response.json())
            .then(data => {

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
                        // divisions?.length && divisions?.filter(division => {
                        //     // const searchdivision = divisionvalue.toLowerCase();
                        //     // const divisionName = division.name.toLowerCase();
                        //     // console.log(division)
                        //     // return searchdivision && divisionName.startsWith(searchdivision) && divisionName !== searchdivision
                        // }).slice(0, 5)
                        divisions?.length && divisions?.map(division =>  console.log(division)
                        // <div key={division.id} onClick={() => onSearchDivision(division.name)}>{division.name}</div>
                        )
                    }
                </div>


            </div>

        </div>
    );
};

export default Addresses;