import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <Wrap>
      <div className="card">
        <div className="imgBox">
          <img src="img1.jpg" />
          <img src="img2.jpg" />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              Someone Famous
              <br />
              <span>Graphic Designer</span>
            </h2>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faSkype} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fbe9e7;

  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
    transition: 1s;
  }

  .card:hover {
    transform: translateX(50%);
  }

  .card .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-origin: left;
    transform-style: preserve-3d;
    background: #000;
    transition: 1s;
    box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  }

  .card:hover .imgBox {
    transform: rotateY(-180deg);
  }

  .card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: perspective(1000px);
    backface-visibility: hidden;
  }

  .card .imgBox img:nth-child(2) {
    transform: rotateY(180deg);
  }

  .card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .card .details .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card .details .content h2 {
    text-align: center;
    font-weight: 700;
    line-height: 1em;
  }

  .card .details .content h2 span {
    color: #e21212;
    font-size: 0.8em;
  }

  .card .details .content .social-icons {
    position: relative;
    display: flex;
    margin-top: 10px;
  }

  .card .details .content .social-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 5px;
    font-size: 18px;
    transition: 0.2;
  }

  .card .details .content .social-icons a:hover {
    background: #e21212;
  }
`;
