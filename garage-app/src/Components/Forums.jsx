import React from "react";
import { useSelector } from "react-redux";
import Row from "./ForumsTableRow";

import './Forums.css'

const Forums = () => {
  const BlogPostForm = useSelector((state) => state.blogForm);
  return (
    <div className="tablebox">
    <table className="table table-dark table-striped mb-0 headings">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">TITLE</th>
          <th scope="col">AUTHOR</th>
          <th scope="col">POST DATE</th>
          <th scope="col">POST CATEGORY</th>
          <th scope="col">CONTENT</th>
        </tr>
      </thead>
      <tbody>

        {BlogPostForm.map(el=>{
          return <Row key={el.id} el={el}/>
        })}

        
        
      </tbody>
    </table>
    </div>
  );
};

export default Forums;
