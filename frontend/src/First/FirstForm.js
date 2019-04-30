import React from 'react';
import FirstOutput from "./FirstOutput";
import FormOutputLoop from "./FormOutputLoop";
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
    let promise = this.search();
  };

  async search() {
    const data = await axios.get(`http://localhost:3012/search/${this.state.wtf}`)
      .then(function (response) {
        console.log('Response', response);
        return response;
      })
      .catch(function (error) {
        console.error(error);
        return [];
      });
    this.state.list = data.data;
  }

  render() {
    return (
      <div>
        <input type="text" name="wtf" onChange={this.onChange} />
        <FormOutputLoop list={this.state.list} />
      </div>
    );
  }
}

export default FirstForm;
