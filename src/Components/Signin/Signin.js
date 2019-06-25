import React from "react";


class Signin extends React.Component{

	constructor(props){
		super(props);
		this.state={
			signInEmail:'',
			signInPassword:''
		}
	}
	onEmailChange=(event)=>{
		this.setState({signInEmail:event.target.value})
	}
	onPasswordChange=(event)=>{
		this.setState({signInPassword:event.target.value})
	}
	onSubmitSignIn=()=>{
		fetch('https://serene-sierra-72794.herokuapp.com/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.signInEmail,
				password:this.state.signInPassword
			})
		})
		.then(response=>response.json())
		.then(data =>{
			console.log(data)
			if(data.id){
				localStorage.setItem('webtoken',data.id)

				this.props.onRouteChange('home')

			}
			
		})
		
	}

	render(){
		return(
		<div>
		<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
		<main className="pa4 black-80">
		  <div className="measure center">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
		      </div>
		     
		    </fieldset>
		    <div className="">
		      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
		    </div>
		    
		  </div>
		</main>
		</article>
		</div>

			);

	}
	

}

export default Signin;