import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/header/header';

import './App.css';


class App extends Component {

  componentDidMount(){
    axios.get('http://localhost:3001/api')
    .then(res=>console.log(res));
  
    let payload={
      message:'test'
    }
  
    axios.post('http://localhost:3001/api/add', payload)
    .then(res=> this.setState({messageRef:res.data}));
  }

  constructor(props) {
    super(props);
    this.state = { 
      messageRef:'',
     }
  }
  render() { 
    return ( 
      <div className="App">
      
      <Header />
     
     </div>
     );
  }
}
 
export default App;



