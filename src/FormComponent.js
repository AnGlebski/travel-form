import React from 'react';

function FormComponent(props) {
  return(
    <main>
      <form>
        <input type="text" 
              name="firstName" 
              value={props.data.firstName}
              onChange={props.handleChange}
              placeholder="First Name" /> <br />
        <input type="text" 
              name="lastName" 
              value={props.data.lastName}
              onChange={props.handleChange}
              placeholder="Last Name" /> <br />
        <input type="text" 
              name="age" 
              value={props.data.age}
              onChange={props.handleChange}
              placeholder="Age" /> <br />

        <label>
          <input type="radio"
                name="gender"
                value="male" 
                checked={props.data.gender === "male"}
                onChange={props.handleChange}/> Male
        </label>
        <label>
          <input type="radio" 
                name="gender"
                value="female" 
                checked={props.data.gender === "female"}
                onChange={props.handleChange}/> Female
        </label>
        <br />
        <label>location:</label>
          <select value={props.data.location}
                name="location"
                onChange={props.handleChange}>
            <option value="moscow">Moscow</option>
            <option value="kazan">Kazan</option>
            <option value="volgograd">Volgograd</option>
          </select>
      
        <br />
        <label>
          <input type="checkbox" 
                name="isVegan" 
                checked={props.data.isVegan}
                onChange={props.handleChange}></input>Vegan
        </label>

        <label>
          <input type="checkbox" 
                name="isRowFood" 
                checked={props.data.isRowFood}
                onChange={props.handleChange}></input>Row food
        </label>

        <label>
          <input type="checkbox" 
                name="isBreatharian" 
                checked={props.data.isBreatharian}
                onChange={props.handleChange}></input>Breatharian
        </label>

        <label>
          <input type="checkbox" 
                name="isKosher" 
                checked={props.data.isKosher}
                onChange={props.handleChange}></input>Kosher
        </label>
        <br />

      <button>Submit</button>
    </form>
    <hr />
    <h2>Entered information:</h2>
    <p>Your name: {props.data.firstName} {props.data.lastName}</p>
    <p>Your age: {props.data.age}</p>
    <p>Your gender: {props.data.gender}</p>
    <p>Your destination: {props.data.location}</p>
    <p>Your dietary restrictions: </p>
    <p>Vegan: {props.data.isVegan ? "yes" : "no"}</p>
    <p>Row food: {props.data.isRowFood ? "yes" : "no"}</p>
    <p>Breatharian: {props.data.isBreatharian ? "yes" : "no"}</p>
    <p>Kosher: {props.data.isKosher ? "yes" : "no"}</p>

  </main>
  )
}

export default FormComponent;