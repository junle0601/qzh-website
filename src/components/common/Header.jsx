import React from 'react'
import { navlink } from '../data/dummydata'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from "../data/qzhlogo.png"

const Header = () => {
  return (
    <>
     <header>
        <div className='container flexsb'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className='nav'>
                {navlink.map((links, i) => (
                    <Link to={links.url} key={i}>{links.text}</Link>
                ))}
            </div>
        </div>
     </header>
    </>
  )
}

export default Header
