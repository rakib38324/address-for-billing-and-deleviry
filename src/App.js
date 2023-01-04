import { useEffect, useState } from 'react';
import Addresses from './Addresses/Addresses';
import './App.css';


function App() {



  // // const divionName = {divisions}

  // const [countries, setCountries] = useState([]);
  // const [countryname, setCountryName] = useState(null);

  // const [NewDivision, setNewDivision] = useState(null);
  // const [divisions, setDivision] = useState([]);

  // const [Upazila, setUpazila] = useState([]);


  // const [value, setValue] = useState('')

  // const onchange = (event) =>{
  //   setValue(wvwnt.target.value)
  // }

  // // useEffect(() => {
  // //   setCountry(countries)
  // // }, [])

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then(response => response.json())
  //     .then(data => {

  //       setCountries(data)
  //     }
  //     );
  // }, [])


  // useEffect(() => {
  //   fetch('bd-divisions.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data.divisions)
  //       setDivision(data.divisions)
  //     }
  //     );
  // }, [])



  // useEffect(() => {
  //   fetch('bd-upazilas.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data.divisions)
  //       setUpazila(data.divisions)
  //     }
  //     );
  // }, [])


  // const handledivision = (name) => {
  //   const countryId = name
  //   console.log(countryId)
  //   // setCountryName(name)

  //   setNewDivision(divisions)


  // }
  // // console.log(divisions)
  // console.log(countryId)

  // <div className="homepage">
  //     <div className='billing-container'>
  //       <h2>BILLING ADDRESS</h2>
  //       <h3>Attention Please</h3>


  //       {/* <div >
  //         <input  list="data" onChange={(e) => handledivision(e.target.value)} placeholder="Select Country" />
  //         <datalist>
  //           <select className='from-container'>
  //           {
  //           countries?.map((country) =>   <option>{country.name.comman}</option> )
  //           }
  //           </select>
  //         </datalist>
  //       </div> */}


  //       <input list="data"  placeholder="Search" />
  //       <datalist id="data">
  //         {/* <option>One</option>
  //               <option>Two</option>
  //               <option>Three</option>
  //               <option>Four</option> */}
  //         {countries.map((op) => <option>{op.name.common}</option>)}
  //       </datalist>

        
  //       <input list="data"  placeholder="Search" />
  //       <datalist id="data">
  //         {/* <option>One</option>
  //               <option>Two</option>
  //               <option>Three</option>
  //               <option>Four</option> */}
  //         {divisions.map((op) => <option>{op.name}</option>)}
  //       </datalist>

        


  //       {/* <div >
  //         <input className='from-container' list="data" onChange={(e) => setCountryName(e.target.value)} placeholder="Select Upazila" />
  //         <datalist id="data">
  //           {Upazila?.map((countries) => <option key={countries.id}>{countries.name}</option>)}
  //         </datalist>
  //       </div> */}




  //       {/* Division Selection */}


  //       {/* <div >
  //         <input className='from-container' list="data" onChange={(e) => setDivisionName(e.target.value)} placeholder="Division Name" />
  //         <datalist id="data">
  //           {divisions?.map((division) => {
  //             <option key={division.id}>{division.name}</option>
  //             // console.log(division.name)
  //           })}
  //         </datalist>
          
  //       </div> */}

  //       <div>

  //         {/* <select className='from-container' onChange={(event) => handledivision(event.target.value)}>

  //           <input value={0} className='from-container' list="data" onChange={(e) => setCountryName(e.target.value)} placeholder="Select Country" />
            
  //           {
  //             divisions &&
  //               divisions !== undefined ?
  //               divisions.map((div, id) => {
  //                 return (
                    
  //                   <option key={id} value={div.id} >{div.name}</option>
  //                 )
  //               })
  //               :
  //               "No Country"
  //           }

  //         </select> */}
  //       </div>

  //     </div>

  //     <div className='shipping-address'>
  //       <h2>BILLING ADDRESS</h2>
  //       <h3>Attention Please</h3>

  //       <div className="App">
  //     <h1>Search</h1>

  //     <div className="search-container">
  //       <div className="search-inner">
  //         <input type="text" value={countries.map(country=> country)} onChange={onChange} />
  //         <button onClick={() => onSearch(value)}> Search </button>
  //       </div>
  //       <div className="dropdown">
  //         {data
  //           .filter((item) => {
  //             const searchTerm = value.toLowerCase();
  //             const fullName = item.full_name.toLowerCase();

  //             return (
  //               searchTerm &&
  //               fullName.startsWith(searchTerm) &&
  //               fullName !== searchTerm
  //             );
  //           })
  //           .slice(0, 10)
  //           .map((item) => (
  //             <div
  //               onClick={() => onSearch(item.full_name)}
  //               className="dropdown-row"
  //               key={item.full_name}
  //             >
  //               {item.full_name}
  //             </div>
  //           ))}
  //       </div>
  //     </div>
  //   </div>

  //     </div>
  //   </div>

  return (
    <div>
      <Addresses></Addresses>
    </div>
  );
}

export default App;
