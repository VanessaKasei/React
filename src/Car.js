import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: "1964"
        };
    }
    render() {
        return (
            <>
            <h1>Hello</h1>
            <h2>My {this.state.brand}</h2>
            <p>Is a {this.state.color} and </p>
            <p>a {this.state.model} from</p>
            <p> {this.state.year}</p>
            </>
        )
    }
}
 export default Car;