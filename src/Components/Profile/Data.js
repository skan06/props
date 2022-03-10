import React from "react";
import propTypes from "prop-types"



function Data(props){
    function dta(){
        if (props.name === "Alice"){
            return alert("hey I'm Alice")
        }
    }
    return(
        <div className="one">
            <div className="tox">
    <h1>hello my name is {props.name} , i am {props.age} ,Im a {props.bio} developer</h1>
    <p>{props.parg}</p>
    <button style={{backgroundColor: "blue", color:"white"}} onClick={dta}>click here</button>
    </div>
    {props.children}
    </div> 
    )
};
Data.defaultProps={
    name:"unknown"
};
Data.propType={
    name:propTypes.string,
    age:propTypes.number,
    bio:propTypes.string
}

export default (Data)