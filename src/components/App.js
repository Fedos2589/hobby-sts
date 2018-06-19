import React, { Component } from 'react'
import '../scss/App.css';
import PersonList from './PersonList'
import ClaimForm from './ClaimForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popup: false
    }
  }

  showPopup = () => this.setState({ popup: true })

  hidePopup= () => this.setState({ popup: false })

  render() {
    return (
      <div className="App">
        <PersonList showPopup={this.showPopup} />
        <ClaimForm show={this.state.popup} hidePopup={this.hidePopup} />
      </div>
    );
  }
}

export default App;
