import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
    console.log("APPCLASS: Component Constructed - 1st");
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  // lifecycle methods - a way to run code at a very specific point in time
  // in the lifecycle of a component
  componentDidMount() {
    console.log("APPCLASS: Component Mounted - 3rd");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("APPCLASS: Component Updated");
    console.log("PROPS---------------");
    console.log(prevProps, this.props);
    console.log("STATE---------------");
    console.log(prevState, this.state);

    if(this.state.name !== prevState.name) {
      
    }
  }

  render() {
    console.log("APPCLASS: Component Rendered - 2nd");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
