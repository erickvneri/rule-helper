import React from "react";
import ButtonRow from "react-bootstrap/ButtonGroup";
import { Button  } from "react-bootstrap";
import { Link  } from "react-router-dom";
import "../App.scss";


function Home() {
	return (
		    <div className="container">
		      <h1 className="title">Rule Helper</h1>
		      <form className="text">
						<p>If you are automating <em>Devices</em> and <em>Connected Services</em> on the <em>SmartThings 
						Cloud</em> and do not want to create a standalone application, creating <em>Automations </em>
						is a great place to start.
						<br /> 
						<a href="https://smartthings.developer.samsung.com/docs/api-ref/st-api.html#tag/rules">Rules </a>
						are a versatile tool, enabling you to create a wide range of Automations that operate on the 
						<em>SmartThings Platform</em>.
						<br />
						A rule is defined in JSON format and contains a name, install source, and a list of actions. 
						A single rule can be used to contain multiple actions within it. These actions represent a 
						tree that is evaluated when the rule is triggered. This <strong><em>Rule Helper </em></strong> 
						is a lightweight, local React application to demonstrate the structure and syntax of Rules so 
						that you can begin creating your own.
						<br />
						<br />
						<strong>Benefits of Rules:</strong>
							<li>Based on the JSON format, which is easy to understand and dynamically create.</li>
							<li>Control flow statements and context managers are very intuitive.</li>
							<li>Rules can be as complex as your creativity will allow.</li>
						<br />
		      	<strong>About the Rule Helper:</strong><br />
						This demonstration is divided in 3 components.

						<li><strong><em>Rule Examples</em></strong> - Templates of the most popular legacy Groovy SmartApps 
						converted to the new Rules JSON format.</li>
						<li><strong><em>Basic Templates</em></strong> - Sample for different Actions using the various 
						Conditions, Operations, and Operands you can use in a Rule.</li>
						<li><strong><em>Advanced Templates</em></strong> - Combines elements presented by <em>Basic 
						Templates</em> to demonstrate the flexibility of nested Conditions and concatenated Actions.</li>
						<br />
						<em><strong>Note</strong>: For further information about installing and managing Rules, 
						visit the <a href="https://smartthings.developer.samsung.com/docs/api-ref/st-api.html#operation/createRule">Rules API.</a></em>
		      	</p>
		      	<br></br>
		      </form>
		      <ButtonRow style={{width: "150%"}}>
		        <Link to="/rule-examples">
		          <Button className="button" style={{width: "17%", marginRight: "15px"}}>Rule Examples</Button>
		        </Link>
		        <Link to="/basic-templates">
		          <Button className="button" style={{width: "17%", marginRight: "15px"}}>Basic Templates</Button>
		        </Link>
		        <Link to="/advanced-templates">
		          <Button className="button" style={{width: "17%", marginRight: "15px"}}>Advanced Templates</Button>
		        </Link>
		      </ButtonRow>
		    </div>
	)
};


export default Home;

