import React, { Component } from 'react'
 
export default class ControlledForm extends Component {
  render() {
    return (
      <div>
        <form>
            <label htmlFor="">You Name:</label>
            <input type="text" />
            <br />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
