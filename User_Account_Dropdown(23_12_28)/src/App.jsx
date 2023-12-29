import React, {useState} from 'react'
import { GlobalStyle, Wrap } from './styles'
import { FaUser,FaRegMessage,FaGear,FaRegCircleQuestion,FaRightFromBracket  } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const App = () => {

  const links = ["Frontend", "Backend", "Code", "Project"];

  const munus = [{icon : FaUser, text : "Profile"},{icon : FaRegEdit,text : "Edit"},{icon : FaRegMessage,text : "Message"},{icon : FaGear,text : "Settings"},{icon : FaRegCircleQuestion,text : "Help"},{icon : FaRightFromBracket,text : "Log out"}]

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <nav>
          <div className="logo">logo</div>
          <ul className="link">
            {
              links.map((val,idx)=>{
                return (
                  <li key={idx} ><a href="#">{val}</a></li>
                )
              })
            }
          </ul>
          <div className="account">
            <div onClick={toggleMenu} className="profile">
              <img src="https://source.unsplash.com/100x100/?guy" alt="user" />
            </div>
            <div className={`menu ${isMenuVisible ? 'js-active' : ''}`}>
              <h3>Jennu Rayen</h3>
              <p>Web Designer</p>
              <ul>
                {
                  munus.map((val,idx)=>{
                    return (
                      <li key={idx}>
                        <val.icon className="menu-icon"/>
                        <a href="#">{val.text}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </nav>
        <section>your content</section>
      </Wrap>
    </>
  )
}

export default App