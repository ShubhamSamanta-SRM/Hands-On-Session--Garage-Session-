import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../Actions/Actions1";



const Blog = () => {
  //using Dispatch function
  const dispatch=useDispatch();
  //Title State
  const [title, settitle] = useState("");
  //Author State
  const [author, setauthor] = useState("");
  //Post Date State
  const [postDate, setpostDate] = useState("");
  //Post Category State
  const [postCategory, setpostCategory] = useState("");
  //Content State
  const [content, setcontent] = useState("");

  return (
    <>
      <div className="container border border-primary mt-5 mb-5 pb-3 bg-secondary">

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author
          </label>
          <input type="text" className="form-control" value={author} onChange={(e)=>{setauthor(e.target.value)}} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Date
          </label>
          <input type="text" className="form-control" value={postDate} onChange={(e)=>{setpostDate(e.target.value)}} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Category
          </label>
          <input type="text" className="form-control" value={postCategory} onChange={(e)=>{setpostCategory(e.target.value)}} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Content
          </label>
          <textarea type="text" className="form-control" value={content} onChange={(e)=>{setcontent(e.target.value)}} ></textarea>
        </div>
        
        <button type="button" className="btn btn-primary" onClick={()=>{dispatch(ADD(title,author,postDate,postCategory,content))}}>
          Upload
        </button>
      </div>
    </>
  );
};

export default Blog;
