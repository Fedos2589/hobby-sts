import React, { Component } from 'react'
import Person from './Person'
import { PERSON_HOBBIES } from '../initial'

class PersonList extends Component {
  constructor(props) {
    super(props)

    this.state = this.initialState()
  }

  initialState = () => {
    let stateObj = PERSON_HOBBIES[0]
    PERSON_HOBBIES.reduce((prevValue, curValue) => Object.assign(stateObj, curValue))
    return stateObj
  }

  deleteHobby = (personId, hobby) => {
    let hobbies = this.state[personId].filter(item => item !== hobby)
    this.setState({ [personId]: hobbies })
  }

  addSomebodysHobby = (hobby) =>
    this.state.me.indexOf(hobby) === -1 ? this.setState({ me: this.state.me.concat(hobby) }) : ''

  controlClick = (personId, hobby) => {
    if (personId === 'me') {
      this.deleteHobby(personId, hobby)
    } else {
      this.addSomebodysHobby(hobby)
    }
  }

  addHobby = (event, id) => {
    if (event.key === 'Enter' && id === 'me') {
      this.setState({ me: this.state.me.concat(event.target.value) })
      event.target.value = ''
    }
  }

  getPersonIds = () => Object.keys(this.state)

  render() {
    return (
      <div className="person-list-container">
        {this.getPersonIds().map((id) =>
          <Person
            editable={id === 'me'}
            personId={id}
            key={id}
            controlClick={this.controlClick}
            hobbies={this.state[id]}
            addHobby={this.addHobby}
            showPopup={this.props.showPopup}
          />
        )}
      </div>
    )
  }
}

export default PersonList
