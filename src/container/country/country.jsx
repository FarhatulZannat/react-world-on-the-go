import React from 'react'
import './country.css'
import { useState } from 'react'

const Country = ({country , handleVisitedCountries , handleVisitedFlags}) => {

  const [visited, setVisited] = useState(false)


  const handleVisited = () =>{
    // ----1st basic system
    // if(visited){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }

    // ----2nd system
    // setVisited(visited ? false : true)

    // -----3rd toggle---true hole false kore diccchi false hole true kore dicchi
    setVisited(!visited)
    handleVisitedCountries(country);
    // ekhne country k pathai dicchi countries er kache
 
  }
     


  return (
    <div className={`country  ${visited ? 'country-visited' : 'country-not-visited' }`}>
    {/* <div className={`country  ${visited && 'country-visited'}`}> */}
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population}</p>

      <p>Area : {country.area.area} {country.area.area >300000 ? '--Big Country' : '--Small Country'}</p>
      
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>

      <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>Add Visited Flag</button>
    </div>
  )
}

export default Country
