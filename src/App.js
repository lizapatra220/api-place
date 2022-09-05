// import axios from 'axios';
import  './App.css';
import React, { useEffect,useState } from 'react'
import axios from 'axios';
function App() {
  const [countries, setcountries] = useState([]);
  const [singlecountry, setsinglecountry] = useState("");
  const [cities, setcities] = useState(null);
  const [singlecity, setsinglecity] = useState("");
  const [submit, setsubmit] = useState(false);
  const fetchcountry=async()=>
  {
    try {
      const country= await axios.get('https://countriesnow.space/api/v0.1/countries');
      // console.log(country.data.data);
      setcountries(country.data.data);
    } catch (error) {
      console.log(error);
   
    }
  }
  const fetchcities =(country)=>{
    setsubmit(false);
    setsinglecity();
    setsinglecountry(country);
    const findcities=countries.find((t)=>t.country==country);
    setcities(findcities.cities);

  }
  const handlesubmit =()=>{
    if(setsinglecountry &&setsinglecity)
    setsubmit(true);
  }
  useEffect(() => {
    fetchcountry();

  },[] )
  
  return<div  className='App'>
  <div className='app-header'>
    <h1>Select Your Hometown</h1>
    <div>
      {countries && (
          <select onChange={(e)=>fetchcities(e.target.value)}>
          <option disabled selected hidden>
            select country
            </option>
            {countries.map((country)=>(
              <option key={'${country.country}-${date.now()}'} value={country.country}>{country.country}</option>

            ))}
        </select>
      ) }
      {cities &&(
         <select onChange={(e)=>setsinglecity(e.target.value) } >
         <option disabled selected hidden>
           select city
           </option>
           {cities.map((city)=>(
            <option key={city} value={city}>{city}</option>

           ))}
  
       </select>
      )
      }

      <button onClick={handlesubmit}>Go</button>
    </div>
    {
      submit && <h3>
      Your Country is {singlecountry} and Your City is {singlecity}.
    </h3>
    }
    
  </div>
  </div>
  
}

export default App
















// function App() {
//   // const [count, setcount] = useState(0);
//   const [userDetails, setuserDetails] = useState(0);
//  const user = async()=>{
//   try {
//     const userDetails = await
//      axios.get("https://randomuser.me/api/");
//     //  console.log(userDetails);
//     setuserDetails(userDetails.data.results[0]);

    
//   } catch (error) {
    
//   }

//  }
//  console.log(userDetails);


//   useEffect(() => {
//     // setcount(count+5);
//     user();
  
//   },[] )
  
//   return<div  className='App'>
// {userDetails && <img src={userDetails.picture.large}/>};
  
//   </div>
  
// }

