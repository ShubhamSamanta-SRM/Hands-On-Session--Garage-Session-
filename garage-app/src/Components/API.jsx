import axios from "axios";
import React, { useState } from "react";
import APITableRow from "./APITableRow";

let data=[];
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
        data=res.data;
        console.log("data");
    })

const API = () => {
    // let data=[];
    // axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
    //     data=res.data;
    //     console.log("data");
    // })
  return (
      
    <div className="tablebox">
    <table className="table table-dark table-striped mb-0 border-top border-white">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">USERID</th>
          <th scope="col">TITLE</th>
          <th scope="col">BODY</th>
        </tr>
      </thead>
      <tbody>
          {/* {console.log(data.length)} */}
          {console.log("Why is this happening")}
          {data.map(el=>{
              return<APITableRow key={el.id} el={el}/>
          })}

      {/* <tr>
        <th scope="row">{data[0].id}</th>
        <td>{data[0].userId}</td>
        <td>{data[0].title}</td>
        <td>{data[0].body}</td>
      </tr> */}

      {/* <tr>
                <th scope="row">{el.id}</th>
                <td>{el.userId}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
              </tr> */}
        
        
      </tbody>
    </table>
    </div>
  );
};

export default API;
