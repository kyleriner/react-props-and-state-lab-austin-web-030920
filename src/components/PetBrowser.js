import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePet = () => {
    let pets = this.props.pets
    return pets.map(pet => <Pet 
      id = {pet.id}
      type = {pet.type}
      name = {pet.name}
      gender = {pet.gender}
      age = {pet.age}
      weight = {pet.weight}
      isAdopted = {pet.isAdopted}
      onAdoptPet = {this.props.onAdoptPet}
      />)
  }


  render() {
    return <div className="ui cards">{this.generatePet()}</div>
  }
}

export default PetBrowser
