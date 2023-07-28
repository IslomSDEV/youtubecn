import React, { useContext } from "react";
import { HiOutlineMenu, HiOutlineSearch, HiOutlineMicrophone } from "react-icons/hi";
import Logo from "../../Assets/Images/Logo/youtube.png";
import { BiVideoPlus } from 'react-icons/bi'
import { BsBell, BsFillKeyboardFill } from 'react-icons/bs'
import './Header.css';
import { Context } from "../Context/Context";


export default function Header() {
  const { searchInputValue, setSearchInputValue, submiteSearch } = useContext(Context)
  return (
    <>
      <div className="header">

        <div className="container headrCont">
        <div className="headerLeftEl">
          <button className="headerMenu">
            <HiOutlineMenu className="headerMenuIcon" />
          </button>
            <img className="headerLogoImg" src={Logo} alt="logo" />
        </div>

        <div className="headerCenterEl">
          <form className="headerCenerForm" onSubmit={(e) => submiteSearch(e)} >
            <input className="headerCenerInput" value={searchInputValue} type="text" placeholder="Enter a request" onChange={(e)=> setSearchInputValue(e.target.value)} />
            <button className="headerCenterSearchBtn">
              <HiOutlineSearch className="headerCneterSearchIcon" />
            </button>
          </form>
          <button className="headerCenterMicrophoneBtn">
            <HiOutlineMicrophone className="headerCenterMicrophoneIcon" />
          </button>
          <BsFillKeyboardFill className="headerCenterKeyboar" />
        </div>

        <div className="headerRightEl">
            <button className="headerRightAddBtn">
                <BiVideoPlus className="headerRightAddIcon"/>
            </button>
            <button className="headerRightBellBtn">
                <BsBell className="headerRightBellIcon" />
            </button>
            <div className="headerRightAccount">
                <span>
                    acc
                </span>
            </div>
        </div>
        </div>
        
      </div>
    </>
  );
}
