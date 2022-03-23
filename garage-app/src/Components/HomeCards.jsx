import React, { useState } from "react";
import {  NavLink  } from "react-router-dom";

import { useDispatch } from "react-redux";
import { LIKE } from "../Actions/Actions1";
import { DIS } from "../Actions/Actions1";

// import NewTab from './IndividualCardPage'

const HomeCards = (props) => {
  //using dispatch
  const dispatch=useDispatch();

  const [clk, setclk] = useState(1)
  
  // let clk=-1;

  const likeClicked=()=>{
    setclk(clk*-1);
    // clk=clk*-1;// Checking if liked or disliked 1 for liked -1 for disliked
    
    // NEED TO PUT SET TIMER AS clk ISN't being registered before calling
    if(clk===1){          //We are using 1 for Like because line no.19 takes time to execute and changes aren't reflected in this condition statement
      dispatch(LIKE(props.el.id));
    }
    else{
      dispatch(DIS(props.el.id));
    }
  }
  // console.log(clk);

  return (
  
    <div className="cards ">
      <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.el.title}</h5>
        <p className="card-text">{props.el.content}</p>
        
        {/* <NavLink className="btn btn-primary me-2 mt-3" target="_blank" to={'/'+props.el.id} >Open in new Tab</NavLink> */}
        <NavLink className="btn btn-primary me-2 mt-3" to={'/'+props.el.id} >Open in new Tab</NavLink>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button onClick={likeClicked} className="fa fa-thumbs-up btn btn-primary fs-4  mt-3 ">{props.el.likes}</button>
        
      </div>
    </div>
  );
};
export default HomeCards;
