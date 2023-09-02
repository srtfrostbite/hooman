// function Greeting(props) {
//     return <p>Hello {props}!</p>
// }

import React from "react";
class Greeting extends React.Component {
  render() {
    return <p>Hello {this.props.username}! </p>;
  }
}

export default Greeting;
