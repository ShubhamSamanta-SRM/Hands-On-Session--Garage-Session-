import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


// import NewTab from './IndividualCardPage'

const HomeCards = (props) => {
  
  // let navi=useNavigate();
  return (
  
    <div className="cards">
      <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.el.title}</h5>
        <p className="card-text">{props.el.content}</p>
        
        <NavLink className="btn btn-primary" target="_blank" to={'/'+props.el.id} >Open in new Tab</NavLink>
      </div>
    </div>
  );
};
export default HomeCards;
