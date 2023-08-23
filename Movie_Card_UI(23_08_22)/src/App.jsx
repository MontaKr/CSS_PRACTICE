import React from "react";
import { GlobalStyle, Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import poster from "./poster.jpg";
import logo from "./avtarlogo.png";
import cast1 from "./cast1.jpg";
import cast2 from "./cast2.jpg";
import cast3 from "./cast3.jpg";
import cast4 from "./cast4.jpg";
import cast5 from "./cast5.jpg";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="card">
          <div className="poster">
            <img src={poster} />
          </div>
          <div className="details">
            <img src={logo} className="logo" />
            <h3>Directed by James Cameron</h3>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              <i class="fa-regular fa-star"></i>
              <span>4/5</span>
            </div>
            <div className="tags">
              <span>Sci-fi</span>
              <span>Action</span>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur itaque laborum cumque natus
              </p>
              <div className="cast">
                <h4>Cast</h4>
                <ul>
                  <li>
                    <img src={cast1} />
                  </li>
                  <li>
                    <img src={cast2} />
                  </li>
                  <li>
                    <img src={cast3} />
                  </li>
                  <li>
                    <img src={cast4} />
                  </li>
                  <li>
                    <img src={cast5} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
