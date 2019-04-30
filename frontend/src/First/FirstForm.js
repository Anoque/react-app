import React from 'react';
import FirstOutput from "./FirstOutput";
var axios = require('axios');

class FirstForm extends React.Component {
  state = {
    wtf: "",
    list: []
  };

  onChange = event => {
    this.setState({
      wtf: event.target.value
    });
    this.search();
  };

  search() {
    axios.get(`http://localhost:3012/search/${this.state.wtf}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

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
