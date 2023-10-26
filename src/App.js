import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import peopleDetails from './data.js';
// import kate from './images/katie_zaferes.png';



function App() {

  // console.log(peopleDetails.ID)

  const peopleElememnt = peopleDetails.map(person => {
    return (
        <Card 
            key = {person.ID}
            personsCard = {person}
        />
    )
  })


  return (
    <div className='App'>
      <Navbar />
      <Hero />

      <section className='cards-list'>
        {peopleElememnt}
      </section>
      
    </div>
  )
}


export default App;


