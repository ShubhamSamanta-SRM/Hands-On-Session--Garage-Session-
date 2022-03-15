import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

import './IndividualCardPage.css'

const IndividualCardPage = () => {
  
  const BlogPostPage = useSelector((state) => state.blogForm);

  const {sid}=useParams();
  const id=Number(sid);
  console.log(BlogPostPage[id]);
  return (
    <div className="">
      <div className="container-fluid title-box text-center fs-1 text-white fw-bold bg-secondary">Title :{BlogPostPage[id].title}</div>
      <div className="fs-4 fw-bold bg-dark text-white">Author:</div>
      <div className="container-fluid subtable-box  fw-700 fs-5 bg-secondary ">{BlogPostPage[id].author}</div>
      <div className="fs-4 fw-bold bg-dark text-white">Category:</div>
      <div className="container-fluid subtable-box  fw-700 fs-5 bg-secondary ">{BlogPostPage[id].postCategory}</div>
      <div className="fs-4 fw-bold bg-dark text-white">Date:</div>
      <div className="container-fluid subtable-box  fw-700 fs-5 bg-secondary ">{BlogPostPage[id].postDate}</div>
      <div className="fs-4 fw-bold bg-dark text-white">Content</div>
      <div className="container-fluid subtable-box  fw-700 fs-5 bg-secondary ">{BlogPostPage[id].content}</div>
    </div>
  )
}

export default IndividualCardPage