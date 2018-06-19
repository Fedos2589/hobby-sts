import React, { Component } from 'react'
import classNames from 'classnames'

class Hobby extends Component {
  constructor(props) {
    super(props)

    this.state = {
      added: this.props.added
    }
  }

  handleClick = (personId, value) => {
    this.props.controlClick(personId, value)
    if (personId !== 'me') this.setState({ added: true })
  }

  render() {
    let { personId, hobbyId, value, controlClick, showPopup } = this.props

    return (
      <div className="hobby-item" key={hobbyId}>
        <a
          className="hobby-item__control"
          onClick={(e) => this.handleClick(personId, value)}
        />
        <div className="hobby-item__text">
          <span className="text">{value}</span>
        </div>
        <span className="claim" onClick={showPopup}>пожаловаться</span>
        <span
          className={
            classNames({
              "added": true,
              "hide": !this.state.added
            })
          }
        >
          добавлено в ваши увлечения
        </span>
      </div>
    )
  }
  
}
  

export default Hobby
