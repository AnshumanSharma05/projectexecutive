import React , {Component} from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import Particles from 'react-particles-js';
const particleOptions={
  particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }



class App extends Component {
  render(){
    return(
      <div className="App">

      <Particles className="particles"
          params={particleOptions}
            
        />
        <Navigation/>
        <Logo/>
        <Form/>
        {/*<signin/>*/}
      </div>  
      );
  }
}



export default App;
