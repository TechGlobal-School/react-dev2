import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default ClassComponent;
