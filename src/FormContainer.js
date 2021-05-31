import React, { Component } from 'react';
import FormComponent from './FormComponent';

class Form extends Component {
    constructor() {
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
        <FormComponent handleChange={this.handleChange} data={this.state}/>
      );
    }
}

export default Form;