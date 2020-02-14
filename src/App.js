import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      consultants: [
        {
          FirstName: "Pete",
          LastName: "Tylerson"
        },
        {
          FirstName: "Mark",
          LastName: "Meretzky"
        },
        {
          FirstName: "Greg",
          LastName: "Tylerson"
        }
      ]
    }
  }

  componentDidMount = async () => {
    let results;
    await fetch("http://localhost:7777/consultants")
            .then(response => response.json())
            .then(json => results = json);
    this.setState({
      consultants: results.consultants
    })
  }
  
  render() {
    let {consultants} = this.state
    return (
      <div className="d-flex justify-content-around flex-wrap">
        {consultants.map(c => (
          <Profile key={c.FirstName} FirstName={c.FirstName} LastName={c.LastName} />
        ))}
      </div>
    )
  }
}

