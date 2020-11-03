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
		      <p>   The <em>Rule Helper</em> is an application intended to improve the understanding of the Rules API. Also, it pretends to
		      enhance the experience of developers and hobbyists while building Home Automation solutions.</p>
		      <br />
		      <p>
		        <strong>Some of the perks about building Rules are:</strong>
		      </p>
		        <li>Rules are based on the JSON format which is easy to understand.</li>
		        <li>Control flow statements and context managers are very intuitive.</li>
		        <li>Complexity of your Rule will rely on your creativity.</li>
		        <li>The flexibility to build different solutions to the same problem, etc.</li>
		      <br />
		      <p>
		        <strong>About the Rule Helper:</strong><br />
		        The <em>Rule Helper</em> is devided in 3 components.
		      </p>
		      <li>The <strong>Rule Examples</strong> component offers a series of Rules that cover multiple use cases with the current Rules API features.</li>
		      <li>The <strong>Basic Templates</strong> component provides an introduction to different conditionals to create Rules.</li>
		      <li>The <strong>Advanced Templates</strong> component combines elements presented by Basic Templates and illustrates the
		      flexibility of nested conditionals and concatenated actions.</li>
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

