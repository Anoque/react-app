import React from 'react';
import FirstOutput from "./FirstOutput";

class FirstForm extends React.Component {
  state = {
    wtf: "",
  };

  onChange = event =>
    this.setState({
      wtf: event.target.value
    });

  render() {
    return (
      <div>
        <input type="text" name="wtf" onChange={this.onChange} />
        <FirstOutput wtf={this.state.wtf} />
      </div>
    );
  }
}

export default FirstForm;
