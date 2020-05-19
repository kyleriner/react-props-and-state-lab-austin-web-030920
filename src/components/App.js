import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = change => {
    this.setState({
      type: change
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(response => response.json())
      .then(pets => this.setState({
        pets: pets
      }))
      
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
    }
  }

  onAdoptPet = (id) => {
    let petList = this.state.pets.slice();

    for (let i = 0; i < petList.length; i++) {
      if (petList[i].id === id) {
        petList[i].isAdopted = true;
        this.setState({pets: petList});
        break;
      }
    }
  }
    
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
