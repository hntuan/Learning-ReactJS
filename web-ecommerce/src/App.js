import "./App.css";
import Header from "./components/header";

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[
         {
           id: 1,
           name: 'Tuan1',
           age: 10,
           status: true,
         },
         {
          id: 2,
          name: 'Tuan2',
          age: 100,
          status: true,
        },
       ]
    }
    
  }

  testsetState = () => {
    this.setState({ 
      users:[
        {
          id: 3,
          name: 'Tuan3',
          age: 10,
          status: true,
        },
        {
         id: 4,
         name: 'Tuan4',
         age: 100,
         status: true,
       },
      ]
    })
  }

  

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  handleLogin = () => {
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);
  }


  render() {

    var users = this.state.users.map(function(user) {
      console.log(user.status);
      let result = '';
      if(user.status){
        result =  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
      }
      return result;
    })
    return (
      <div>
        <Header className="header" name="HN tuan"> HUMG</Header>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
        <hr/>
        <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>

        <button className="btn btn-primary" onClick={this.testsetState}>Click setState</button>
      </div>
    );
  }
}

export default App;