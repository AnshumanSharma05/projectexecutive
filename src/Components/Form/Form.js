import React from "react";

class Form extends React.Component {
	constructor(){
		super();
		this.state={
			description:null,
			educationNeeds:null,
			educationalQualification:null,
			edugaps:null,
			technicalEMS:null,
			technicalAS:null,
			technicalcounterfeit:null,
			technicalSAP:null,
			gapsInTechnicalSkillsEMS:null,
			gapsInTechnicalSkillsAS:null,
			gapsInTechnicalSkillsCounterfeit:null,
			gapsInTechnicalSkillsSAP:null,
			personalSkill:null,
			personalInitiative:null,
			personalTeamCollab:null,
			personalCustomerOrientation:null,
			personalCommitment:null,
			gapsInPersonalSkill:null,
			gapsInPersonalInitiative:null,
			gapsInPersonalTeamCollaboration:null,
			gapsInPersonalCustomerOrientation:null,
			gapsInPersonalCommitment:null




		}
		this.onChangeData=(type,value)=>{
			if(type==="entry.940517193"){
				this.setState({description:value.target.value})
			}
			else if(type==="entry.1383203373"){
				this.setState({educationNeeds:value.target.value})
			}
			else if(type==="entry.275711554"){
				this.setState({educationalQualification:value.target.value})
			}
			else if(type==="entry.376256105"){
				this.setState({edugaps:value.target.value})
			}
			else if(type==="entry.685408735"){
				this.setState({technicalEMS:value.target.value})
			}
			else if(type==="entry.49235170"){
				this.setState({technicalAS:value.target.value})
			}
			else if(type==="entry.109894530"){
				this.setState({technicalcounterfeit:value.target.value})
			}
			else if(type==="entry.1774672569"){
				this.setState({technicalSAP:value.target.value})
			}
			else if(type==="entry.2085857037"){
				this.setState({gapsInTechnicalSkillsEMS:value.target.value})
			}
			else if(type==="entry.1028887899"){
				this.setState({gapsInTechnicalSkillsAS:value.target.value})
			}
			else if(type==="entry.1775059827"){
				this.setState({gapsInTechnicalSkillsCounterfeit:value.target.value})
			}
			else if(type==="entry.1733907273"){
				this.setState({gapsInTechnicalSkillsSAP:value.target.value})
			}
			else if(type==="entry.171552983"){
				this.setState({personalSkill:value.target.value})
			}
			else if(type==="entry.1447496313"){
				this.setState({personalInitiative:value.target.value})
			}
			else if(type==="entry.256450741"){
				this.setState({personalTeamCollab:value.target.value})
			}
			else if(type==="entry.56450543"){
				this.setState({personalCustomerOrientation:value.target.value})
			}
			else if(type==="entry.1408775861"){
				this.setState({personalCommitment:value.target.value})
			}
			else if(type==="entry.1732963369"){
				this.setState({gapsInPersonalSkill:value.target.value})
			}
			else if(type==="entry.112259373"){
				this.setState({gapsInPersonalInitiative:value.target.value})
			}
			
			else if(type==="entry.929229713"){
				this.setState({gapsInPersonalTeamCollaboration:value.target.value})
			}
			else if(type==="entry.1439582333"){
				this.setState({gapsInPersonalCustomerOrientation:value.target.value})
			}
			else if(type==="entry.1724529932"){
				this.setState({gapsInPersonalCommitment:value.target.value})
			}



			
		}

		this.submitForm=()=>{
			console.log(this.state)
			fetch('https://serene-sierra-72794.herokuapp.com/form',
			{
				method:'post',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({data:this.state,userid:localStorage.getItem('webtoken')})
					}

					)
			.then(response=>console.log(response))
		
			
		}
	}


		render(){

			return(
			<div>
			
		    <fieldset>
		        <h1>COMPETENCY MATRIX </h1>
		        SKILL/COMPETENCY INVENTORY &amp; GAP ANALYSIS
		    </fieldset>
		    


		    
		    <fieldset>
		        <legend htmlFor="308279426"><h1>Job Description </h1></legend>
		        <div className="form-group">
		            <textarea onChange={e=>this.onChangeData("entry.940517193" ,e)} id="940517193" name="entry.940517193" className="form-control" ></textarea>
		        </div>
		    </fieldset>
		    


		    <div>
		    <fieldset>
		        <legend htmlFor="1998214016"><h1>1) Educational Qualification </h1></legend>
		        <div className="form-group">
		            <p className="help-block"><h3>Please enter the following Details</h3></p>
		        </div>
		    </fieldset>
		    </div>


		    <div>
		    <fieldset>
		        <legend htmlFor="1453692093">Education needs For job as Identified by Sec/Dept/Div Head</legend>
		        <div className="form-group">
		            <textarea onChange={e=>this.onChangeData("entry.1383203373",e)} id="1383203373" name="entry.1383203373" className="form-control" ></textarea>
		        </div>
		    </fieldset>
		    </div>


		    <div>
		    <fieldset>
		        <legend htmlFor="1362308665">Educational Qualification of the employee</legend>
		        <div className="form-group">
		            <textarea onChange={e=>this.onChangeData("entry.275711554",e)} id="275711554" name="entry.275711554" className="form-control" ></textarea>
		        </div>
		    </fieldset>
		    </div>

		    <div>
		    <fieldset>
		        <legend htmlFor="95216888">Gaps as identified by the Sec/Dept/Div Head</legend>
		        <div className="form-group">
		            <textarea onChange={e=>this.onChangeData("entry.376256105",e)} id="376256105" name="entry.376256105" className="form-control" ></textarea>
		        </div>
		    </fieldset>
		    </div>


		    <div>
		    <fieldset>
		        <legend htmlFor="1761000661"><h1>2) Technical Skill</h1></legend>
		        <div className="form-group">
		            <p className="help-block"><h3>Technical Skills/Competecy include Quality related skills/Competency also
		Use This 5 point Scale to indicate level :Excellent &#x3D;5 , V.Good &#x3D;4 , Good &#x3D; 3 , Satisfactory&#x3D;2 , Unsatisfactory &#x3D; 1. </h3></p>
		        </div>
		    </fieldset>
		    </div>

		    <div>
		    <fieldset>
		        <legend htmlFor="1084603670">Technical skill/ competency needed htmlFor the job as identified by sec / dept / div head.(Please select)</legend>
		        <div className="form-group">
		            <div>
		                <span>EMS (ISO 14001:2015)-BASIC: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.685408735",e)} type="radio" name="entry.685408735" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.685408735",e)} type="radio" name="entry.685408735" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.685408735",e)} type="radio" name="entry.685408735" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.685408735",e)} type="radio" name="entry.685408735" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.685408735",e)} type="radio" name="entry.685408735" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>AS 9100 D-Basic: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.49235170",e)} type="radio" name="entry.49235170" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.49235170",e)} type="radio" name="entry.49235170" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.49235170",e)} type="radio" name="entry.49235170" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.49235170",e)} type="radio" name="entry.49235170" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.49235170",e)} type="radio" name="entry.49235170" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>Counterfeit items: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.109894530",e)} type="radio" name="entry.109894530" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.109894530",e)} type="radio" name="entry.109894530" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.109894530",e)} type="radio" name="entry.109894530" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.109894530",e)} type="radio" name="entry.109894530" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.109894530",e)} type="radio" name="entry.109894530" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>SAP: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1774672569",e)} type="radio" name="entry.1774672569" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1774672569",e)} type="radio" name="entry.1774672569" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1774672569",e)} type="radio" name="entry.1774672569" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1774672569",e)} type="radio" name="entry.1774672569" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1774672569",e)} type="radio" name="entry.1774672569" value="1"/>
		                    1
		                </label>
		            </div>
		        </div>
		    </fieldset>
		    </div>


		   	<div>
		    <fieldset>
		        <legend htmlFor="1577566810">Gaps in Technical Skill/ Competency as identified by Sec/Dept/Div Head</legend>
		        <div className="form-group">
		            <div>
		                <span>EMS (ISO 14001:2015)-BASIC: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.2085857037",e)} type="radio" name="entry.2085857037" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.2085857037",e)} type="radio" name="entry.2085857037" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.2085857037",e)} type="radio" name="entry.2085857037" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.2085857037",e)} type="radio" name="entry.2085857037" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.2085857037",e)} type="radio" name="entry.2085857037" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>AS 9100 D-Basic: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1028887899",e)} type="radio" name="entry.1028887899" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1028887899",e)} type="radio" name="entry.1028887899" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1028887899",e)} type="radio" name="entry.1028887899" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1028887899",e)} type="radio" name="entry.1028887899" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1028887899",e)} type="radio" name="entry.1028887899" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>Counterfeit items: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1775059827",e)} type="radio" name="entry.1775059827" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1775059827",e)} type="radio" name="entry.1775059827" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1775059827",e)} type="radio" name="entry.1775059827" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1775059827",e)} type="radio" name="entry.1775059827" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1775059827",e)} type="radio" name="entry.1775059827" value="1"/>
		                    1
		                </label>
		            </div>
		            <div>
		                <span>SAP: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1733907273",e)} type="radio" name="entry.1733907273" value="5"/>
		                    5
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1733907273",e)} type="radio" name="entry.1733907273" value="4"/>
		                    4
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1733907273",e)} type="radio" name="entry.1733907273" value="3"/>
		                    3
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1733907273",e)} type="radio" name="entry.1733907273" value="2"/>
		                    2
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1733907273",e)} type="radio" name="entry.1733907273" value="1"/>
		                    1
		                </label>
		            </div>
		        </div>
		    </fieldset>
		    </div>


		    <div>
		    <fieldset>
		        <legend htmlFor="529254059"><h1>3) Personal Skills /Competency</h1></legend>
		        <div className="form-group">
		        </div>
		    </fieldset>
		    </div>


		    <div>
		    <fieldset>
		        <legend htmlFor="1667712746">Skill / Competency of the employees as perceived by this Sec/Dept/Div (Possessed by the employee concerned)</legend>
		        <div className="form-group">
		            <div>
		                <span>Interpersonal &amp; Communication Skills : </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.171552983",e)} type="radio" name="entry.171552983" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.171552983",e)}  type="radio" name="entry.171552983" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.171552983",e)}  type="radio" name="entry.171552983" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.171552983",e)}  type="radio" name="entry.171552983" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Drive &amp; Initiative: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1447496313",e)}  type="radio" name="entry.1447496313" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1447496313",e)} type="radio" name="entry.1447496313" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1447496313",e)} type="radio" name="entry.1447496313" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1447496313",e)} type="radio" name="entry.1447496313" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Team Collaboration: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.256450741",e)} type="radio" name="entry.256450741" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.256450741",e)}  type="radio" name="entry.256450741" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.256450741",e)}  type="radio" name="entry.256450741" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.256450741",e)}  type="radio" name="entry.256450741" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Customer Orientation: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.56450543",e)} type="radio" name="entry.56450543" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.56450543",e)} type="radio" name="entry.56450543" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.56450543",e)} type="radio" name="entry.56450543" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.56450543",e)} type="radio" name="entry.56450543" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Commitment: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1408775861",e)} type="radio" name="entry.1408775861" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1408775861",e)} type="radio" name="entry.1408775861" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1408775861",e)} type="radio" name="entry.1408775861" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1408775861",e)} type="radio" name="entry.1408775861" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		        </div>
		    </fieldset>
		    </div>

		    <div>
		    <fieldset>
		        <legend htmlFor="1540085248">Gaps in Personal Skills / Competency as identified by the Sec/Dept/Div Head</legend>
		        <div className="form-group">
		            <div>
		                <span>Interpersonal &amp; Communication Skills: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1732963369",e)} type="radio" name="entry.1732963369" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1732963369",e)} type="radio" name="entry.1732963369" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1732963369",e)} type="radio" name="entry.1732963369" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1732963369",e)} type="radio" name="entry.1732963369" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Drive &amp; Initiative: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.112259373",e)} type="radio" name="entry.112259373" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.112259373",e)} type="radio" name="entry.112259373" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.112259373",e)}  type="radio" name="entry.112259373" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.112259373",e)} type="radio" name="entry.112259373" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Team Collaboration: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.929229713",e)} type="radio" name="entry.929229713" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.929229713",e)}  type="radio" name="entry.929229713" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.929229713",e)}  type="radio" name="entry.929229713" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.929229713",e)}  type="radio" name="entry.929229713" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Customer Orientation: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1439582333",e)}  type="radio" name="entry.1439582333" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1439582333",e)} type="radio" name="entry.1439582333" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1439582333",e)} type="radio" name="entry.1439582333" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1439582333",e)} type="radio" name="entry.1439582333" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		            <div>
		                <span>Commitment: </span>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1724529932",e)} type="radio" name="entry.1724529932" value="High"/>
		                    High
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1724529932",e)} type="radio" name="entry.1724529932" value="Moderate"/>
		                    Moderate
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1724529932",e)} type="radio" name="entry.1724529932" value="Low"/>
		                    Low
		                </label>
		                <label className="radio-inline">
		                    <input onClick={e=>this.onChangeData("entry.1724529932",e)} type="radio" name="entry.1724529932" value="Poor"/>
		                    Poor
		                </label>
		            </div>
		        </div>
		    </fieldset>
		    </div>

		    <input type="hidden" name="fvv" value="1"/>
		    <input type="hidden" name="fbzx" value="5389486274521765980"/>
		    
		    <input type="hidden" name="pageHistory" value="0"/>

		    <input onClick ={this.submitForm} className="btn btn-primary" type="submit" value="Submit"/>

	









			</div>
			);

		}

	
	
	

}

export default Form;