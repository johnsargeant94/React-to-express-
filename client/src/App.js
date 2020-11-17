import {Component} from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);// bind = changes value of 'this'
    this.handleSubmit = this.handleSubmit.bind(this); // inside of constructor, this == App class
  }

  handleChange(event) {
    // console.log(this); // App class
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    let response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({answer: this.state.value})
    });

    console.log(await response.text());
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="answer" value={this.state.value} onChange={this.handleChange} />

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default App;