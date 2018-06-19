import React, { Component } from 'react'
import classNames from 'classnames'
import randomKey from '../utils/randomKey'
import { PERSON_TITLES } from '../initial'
import HobbiesList from './HobbiesList'


class Person extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shortList: true,
      popup: false
    }
  }

  formatInterests = (value) => {
    switch(value) {
      case 1:
        return 'интерес'
      case 2:
      case 3:
      case 4:
        return 'интереса'
      default:
        return 'интересов'
    }
  }

  countAdditionalHobbies = () => this.props.hobbies.length - 2

  getHobbiesList = () => {
    let hobbiesList = this.state.shortList ? this.props.hobbies.slice(0, 2) : this.props.hobbies
    return randomKey(hobbiesList, 1)
  }

  showMoreHobbies = () => this.setState({ shortList: false })

  render() {
    let { editable, personId, addHobby, controlClick, showPopup } = this.props

    return (
      <div className="person">
        <h2 className="person-title">{PERSON_TITLES[personId]}</h2>
        <div className="person-subtitle">
          <span className="person-subtitle__text">Хобби</span>
          <span className="person-subtitle__line" />
        </div>
        <div className="hobbies-list-wrapper">
          <div
            className={
              classNames({
                "input-wrapper": true,
                "hide": !editable
              })
            }
          >
            <input
              placeholder='Введите текст'
              className='new-hobby'
              onKeyPress={(e) => addHobby(e, personId)}
            />
          </div>
          <HobbiesList
            list={this.getHobbiesList()}
            personId={personId}
            controlClick={controlClick}
            showPopup={showPopup}
          />
          <a
            className={
              classNames({
                "more-link": true,
                "hide": this.countAdditionalHobbies() < 1 || !this.state.shortList
              })
            }
            onClick={this.showMoreHobbies}
          >
            {`еще ${this.countAdditionalHobbies()} ${this.formatInterests(this.countAdditionalHobbies())}`}
          </a>
         </div>
      </div>
    );
  }
}

export default Person
