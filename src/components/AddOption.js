import React from 'react'

export default class AddOption extends React.Component {
    /* 
    THIS IS A EXAMPLE TO USE CONSTRUCTOR AND TO BIND THIS WITH FUNCTION, ANOTHER METHOD IS DESCRIBED BELOW
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
       this.state = {
        error : undefined 
      } 
    }
    handleAddOption(e) {
      e.preventDefault()

      const option = e.target.elements.option.value.trim()

      //sending values from child to parent class.
      const error=this.props.handleAddOption(option)

      this.setState(() => ({ error }));

      if(!error) {
        e.target.elements.option.value=''
      }

      //e.target.elements.option.value=''
    } */

    state = {
      error: undefined
    }
    //new class syntax
    handleAddOption=(e) => {
      e.preventDefault()

      const option = e.target.elements.option.value.trim()

      //sending values from child to parent class.
      const error=this.props.handleAddOption(option)

      this.setState(() => ({ error }));

      if(!error) {
        e.target.elements.option.value=''
      }

      //e.target.elements.option.value=''
    }

    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p> }
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type='text' name='option' />
            <button className="button">Add option</button>
          </form>
           
        </div>
      )
    }
  }