import React from "react";
import './Home.css'
import { useSelector } from "react-redux";
import Cards from './HomeCards'

const Home = () => {
  const BlogPostCard = useSelector((state) => state.blogForm);
  return (
    // <div className="container border border-danger mt-3 mb-3">
    // <div className="container row border border-danger">
    <div id="backimg">
    <div className="">
    {/* <img src="https://cdn.britannica.com/79/91479-050-24F98E12/Guernica-canvas-Pablo-Picasso-Madrid-Museo-Nacional-1937.jpg" className="img-fluid" alt="..."/> */}
    <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" className="img-fluid" alt="..."/>
    </div>

    <div className="cardBox container-fluid">
      {BlogPostCard.map(el=>{
        return <Cards key={el.id} el={el}/>
      })}
    </div>

    </div>
  );
};

export default Home;


{/* <div className="cards">
        <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="cards" >
        <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="cards" >
        <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="cards" >
        <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="cards" >
        <img src="https://www.ibm.com/blogs/policy/wp-content/uploads/2020/11/IBMCardImage-1024x576.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
