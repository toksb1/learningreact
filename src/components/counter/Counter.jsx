import React, {Component} from 'react'
import propTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
  constructor(){
    super();
   this.state = {
     counter:0,
  
   }
   
  this.increment = this.increment.bind(this);
  this.decrements = this.decrements.bind(this);
  this.reset = this.reset.bind(this);
 }
  render(){
    return(
      <div className="counter">
     <CounterButton by = {1} incrementMethod = {this.increment}  decrementsMethod = {this.decrements}/>
     <CounterButton by = {5} incrementMethod = {this.increment}  decrementsMethod = {this.decrements}/>
     <CounterButton by = {10} incrementMethod = {this.increment} decrementsMethod = {this.decrements}/>
     <span className = "count">{this.state.counter}</span>
     <div><button className = "reset" onClick = {this.reset}>Reset</button></div>
    </div>
    )
  }

  reset (){
    this.setState( {counter:0}
       
    );
  }
 
increment (by) {
  //increment =() =>{
  //console.log('increment');
  //this.state.counter++; never update state directly
  //console.log(`increment - ${by}`)
   this.setState(
    (prevState)=> {
     return {counter: prevState.counter + by}

     }
  );
}
  decrements (by) {
    //increment =() =>{
    //console.log('increment');
    //this.state.counter++; never update state directly
    //console.log(`increment - ${by}`)
     this.setState(
      (prevState)=> {
       return {counter: prevState.counter - by}
  
       } 
    );
  }
}

class CounterButton extends Component {

  constructor(){
   super();
   this.state = {
     counter:0,
  }
   this.increment = this.increment.bind(this);
   this.decrements = this.decrements.bind(this);
}
  // define the initial state using a constructur
  render() {
  //render =() =>{
   // const style = {fontSize: "50px", padding: "15px 30px"}
      return(
        <div className ="counter">
          <button onClick={this.increment} >+{this.props.by}</button>
          <button onClick={this.decrements} >-{this.props.by}</button>
        </div>
        
      ) 
  }
   increment () {
  //   //increment =() =>{
  //   //console.log('increment');
  //   //this.state.counter++; never update state directly
  //   //console.log("increment ")
     this.setState({
      counter: this.state.counter + this.props.by
  });

  this.props.incrementMethod(this.props.by);
   }
  decrements () {
   //increment =() =>{
    //console.log('increment');
     //this.state.counter++; never update state directly
  //   //console.log("increment ")
     this.setState({
     counter: this.state.counter - this.props.by
      });

      this.props.decrementsMethod(this.props.by);
   }
   }
  

CounterButton.defaultProps ={
  by:1
}
Counter.propTypes= {
  by : propTypes.number

}


export default Counter