import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const countries = [
    { id: '1', name: "Bangladesh" },
    { id: '2', name: "India" },
    { id: '3', name: "USA" }
  ]

  // const divionName = {divisions}

  const [country, setCountry] = useState([]);
  const [divisions, setDivision] = useState([]);

  useEffect(() => {
    setCountry(countries)
  }, [])

  useEffect(() => {
    fetch('bd-divisions.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data.divisions)
        setDivision(data.divisions)
      }
      );
  }, [])


  const handledivision = (id) => {
      const countryId = id
      console.log(countryId)
      
       

      
      
  }
// console.log(countryId)


  return (
    <div className="homepage">
      <div className='billing-container'>
        <h2>BILLING ADDRESS</h2>
        <h3>Attention Please</h3>

        {/* Select Country */}
        <div className=''>
          <select className='from-container' >
            <input list='data' placeholder='Select Country' ></input>
            {/* <option value={0}> Select Country</option> */}
            {
              country &&
                country !== undefined ?
                country.map((ctr, index) => {
                  return (
                    <option key={index} value={ctr.id}>{ctr.name}</option>
                  )
                })
                :
                "No Country"
            }
          </select>
        </div>

        {/* Division Selection */}
        <div>
          
           <select className='from-container' onChange={(event) => handledivision(event.target.value)}>

            <option value={0}> Select Devetion</option>
             {
              divisions &&
                divisions !== undefined ?
                divisions.map((div, id) => {
                  return (
                    <option key={id} value={div.id} >{div.name}</option>
                  )
                })
                :
                "No Country"
            }

          </select>
        </div>

      </div>

      <div className='shipping-address'>
        <h2>BILLING ADDRESS</h2>
        <h3>Attention Please</h3>


      </div>
    </div>
  );
}

export default App;
