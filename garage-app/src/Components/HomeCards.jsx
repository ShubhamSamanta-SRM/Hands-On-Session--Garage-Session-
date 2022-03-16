import React from "react";
import {  NavLink  } from "react-router-dom";


// import NewTab from './IndividualCardPage'

const HomeCards = (props) => {
  
  let clk=1;
  const likeClicked=()=>{
    console.log("Clicked card with id :");
    console.log(props.el.id);
    console.log(clk);
    clk=clk*-1;
  }

  return (
  
    <div className="cards ">
      <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.el.title}</h5>
        <p className="card-text">{props.el.content}</p>
        
        <NavLink className="btn btn-primary me-2 mt-3" target="_blank" to={'/'+props.el.id} >Open in new Tab</NavLink>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button onClick={likeClicked} className="fa fa-thumbs-up btn btn-primary fs-4  mt-3 ">{props.el.likes}</button>
        
      </div>
    </div>
  );
};
export default HomeCards;
