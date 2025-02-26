import React from 'react'
import { navlink } from '../data/dummydata'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <header>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
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
