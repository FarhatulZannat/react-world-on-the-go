import React from 'react'
import { use } from 'react'
import Country from '../country/country'
import './countries.css'
import { useState } from 'react'


const Countries = ({countriesPromise}) => {    

  const [visitedCountries, setVisitedCountries ] = useState([]);
  const [visitedFlags, setVisitedFlags ] = useState([])

  const handleVisitedCountries = (country) =>{
    // ekhne country ta receave kortesi...beparta ulta hocche ekhne
     const newVisitedCountries = [...visitedCountries , country]
     setVisitedCountries(newVisitedCountries) 
  }

  const handleVisitedFlags = (flag) =>{
    const newVisitedFlags = [...visitedFlags , flag]
    setVisitedFlags(newVisitedFlags)
  }


    const countriesData = use(countriesPromise)   
  const countries = countriesData.countries
  // console.log(countries)


  return (
    <div >
      <h1>In the countries : {countries.length}</h1>
      <h2>Visited Countries  : {visitedCountries.length} </h2>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>

      <h2>Visited Flags : {visitedFlags.length}</h2>
      <div className='visited-flags-container'>
        {
          visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
        }
      </div>


      <div className='countries'>
        {
        countries.map(country => <Country
           key={country.cca3.cca3} 
           country = {country}  
           handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlags = {handleVisitedFlags}>
           </Country>)
      }
      </div>
    </div>
  )
}

export default Countries
