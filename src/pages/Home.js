import React from 'react'
import background from '../assets/aptlayout2.JPG'
const Home = () => {
  return (
    <div data-testid= "background" style= {{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "50%"}}>
      <h1 className= "homeHeader">Find the best deals for apartments here! </h1>
    </div>
  )
}

export default Home