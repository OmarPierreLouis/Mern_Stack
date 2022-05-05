import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state= {
            age: this.props.age
        }
    }
    render(){
        const ageOneYear = ()=>{
            // console.log(`clicked ${firstName}`);
            this.setState({ age:this.state.age + 1 })
        }
        let {firstName, lastName, age, hairColor} = this.props; 
        return (
        <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ageOneYear}type="button" class="btn btn-dark">Birthday For {firstName}</button>
            <hr />
        </div>
        )
    }
}
export default Card; 