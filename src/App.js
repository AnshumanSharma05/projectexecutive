import React , {Component} from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import Signin from "./Components/Signin/Signin";
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
  constructor(){
    super();
    this.state={
      route:"signin",
      isSignedIn:false,

    }
  }
  componentDidMount(){
    fetch('http://localhost:3000')
    .then(response=>response.json())
    .then(console.log)
  }

  onRouteChange=(route)=>{
    if(route==="signout"){
      this.setState({isSignedIn:false})
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }
  render(){
    return(
      <div className="App">

      <Particles className="particles"
          params={particleOptions}
            
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route==="home" ?
        <div>
          <Logo/>
          <Form/>
        </div>
        : (
          this.state.route==="signin" 
          ? 
        <div>
          <Logo/>
          <Signin onRouteChange={this.onRouteChange}/>
        </div>
        :
        <div>
          <Logo/>
          <Signin onRouteChange={this.onRouteChange}/>
          
        </div>
        )

      }
        
      </div>  
      );
  }
}



export default App;
