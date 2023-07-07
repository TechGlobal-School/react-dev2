import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    console.log("constructor running ...");
    this.state = {
      value: 0,
    };
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps running ...");
    return null;
  }
  componentDidMount() {
    // let timer = setInterval();
    console.log("componentDidMount running ...");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate running ...");
    return true;
    // render this component only when value changed
  }

  componentDidUpdate() {
    console.log("componentDidUpdate running ...");
  }

  componentWillUnmount() {
    // clearInterval(timer);
    console.log("componentWillUnmount running ...");
  }
  render() {
    console.log("render running ...");
    return (
      <div>
        <h1>Class Component </h1>
        <p>Value: {this.state.value}</p>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Update value
        </button>
      </div>
    );
  }
}

export default ClassComponent;

// Component LifeCycle

// 1. Mounting -> when you create a component and mount it to DOM
// 2. Updaing -> when you change state data
// 3. Unmounting -> when component gets destroyed

/* 
Mounting Phase
 - constructor
 - getDerivedStateFromProps
 - render
 - componentDidMount

 Updating Phase:
 - getDerivedStateFromProps
 - shouldComponentUpdate
 - render
 - componentDidMount
*/
