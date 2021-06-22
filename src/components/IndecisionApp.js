import React from 'react';

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal';
import '../styles/Styles.scss'





export default class IndecisionApp extends React.Component {
    
    state = {
        options : [],
        selectedOption: undefined
      };
      
      //to close modal
      handleClearSelectedOption = () => {
          this.setState(() => ({selectedOption: undefined}))
      }

      handleDeleteOptions = () => {
        this.setState(() => ({ options: []}));
      }
  
      handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option )
        }))
      } 
  
      handlePick=() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        //alert(this.state.options[randomNum])
        const option= this.state.options[randomNum]
        this.setState(()=> (
            {
                selectedOption: option
            }
        ))
      }
      handleAddOption=(option) => {
        if(!option){
          return 'Enter a valid value to add item.'
        } else if(this.state.options.indexOf(option) > -1) {
          return 'This item already exists!'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)})
        )
      }


    componentDidMount(){

      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if(options){
          this.setState(() => ({ options }))
      }
      } 
      catch (e) {
        //Do nothing
      }
      
      
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        const json=JSON.stringify(this.state.options)
        localStorage.setItem('options',json);
      }

    }

    
    render() {
      const title = 'IndecisionApp' 
      const subtitle = 'Let computer decide your fate :)'
  
      return(
        <>
          <Header title={title} subtitle={subtitle}/>
          <div className='container'>
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
          <div className='widget'>
          <Options options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}/>
          <AddOption handleAddOption={this.handleAddOption}/>
           
          </div>
          

          </div>
           <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </>
      )
    }
  }