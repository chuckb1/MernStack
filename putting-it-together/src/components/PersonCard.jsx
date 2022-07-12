import { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:props.age
        }

    }
    render() {
        const {  firstName, lastName, age, hairColor}= this.props;
        return(
            <>
            <h1>{lastName},{firstName}</h1>
            <h2>Age:{this.state.age}</h2>
            <h2>Hair Color: {hairColor}</h2>
            <button onClick={ () => {this.setState({age: this.state.age+1})}}> {firstName}'s Birthday! </button>
            
            </>
        );
    }
}

export default PersonCard;