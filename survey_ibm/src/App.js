import React, { Component } from 'react';
import logo from './ibm.png';
import './App.css';
import UserForm from './UserForm';
import SocialButtons from './SocialButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    return fetch('api/hello')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          message: responseJson.message
        });
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='text-center'>
          <img src={logo} className="img-fluid" alt="logo" style={{height: '35px'}}/>
        </div>
        <h2> Por favor, completa tus datos:</h2>
        <UserForm />
        <SocialButtons />
      </div>
    );
  }
}


export default App;
