import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }
componentDidMount(){
  fetch('http://localhost:3000/')
  .then(response=> response.json())
  .then(res=>{
    if(res.data)
  });
}
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
