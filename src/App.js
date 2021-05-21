import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      isVegan: false,
      isRowFood: false,
      isBreatharian: false,
      isKosher: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value, type, checked} = e.target;
    type === 'checkbox' ? this.setState({ [name]: checked}) : this.setState({ [name]: value})
  }

  render() {
    return (
      <main>
        <form>
          <input type="text" 
                  name="firstName" 
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name" /> <br />
          <input type="text" 
                  name="lastName" 
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name" /> <br />
          <input type="text" 
                  name="age" 
                  value={this.state.age}
                  onChange={this.handleChange}
                  placeholder="Age" /> <br />

          <label>
            <input type="radio"
                    name="gender"
                    value="male" 
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}/> Male
          </label>
          <label>
            <input type="radio" 
                    name="gender"
                    value="female" 
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}/> Female
          </label>
          <br />
          <label>location:</label>
            <select value={this.state.location}
                    name="location"
                    onChange={this.handleChange}>
              <option value="moscow">Moscow</option>
              <option value="kazan">Kazan</option>
              <option value="volgograd">Volgograd</option>
            </select>
          
          <br />
          <label>
            <input type="checkbox" 
                    name="isVegan" 
                    checked={this.state.isVegan}
                    onChange={this.handleChange}></input>Vegan
          </label>

          <label>
            <input type="checkbox" 
                    name="isRowFood" 
                    checked={this.state.isRowFood}
                    onChange={this.handleChange}></input>Row food
          </label>

          <label>
            <input type="checkbox" 
                    name="isBreatharian" 
                    checked={this.state.isBreatharian}
                    onChange={this.handleChange}></input>Breatharian
          </label>

          <label>
            <input type="checkbox" 
                    name="isKosher" 
                    checked={this.state.isKosher}
                    onChange={this.handleChange}></input>Kosher
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>Your dietary restrictions: </p>
        <p>Vegan: {this.state.isVegan ? "yes" : "no"}</p>
        <p>Row food: {this.state.isRowFood ? "yes" : "no"}</p>
        <p>Breatharian: {this.state.isBreatharian ? "yes" : "no"}</p>
        <p>Kosher: {this.state.isKosher ? "yes" : "no"}</p>

      </main>
    );
  }
}

export default App;
