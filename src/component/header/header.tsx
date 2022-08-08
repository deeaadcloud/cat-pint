import React, { useState } from 'react';
import './header.css';
import {Link} from 'react-router-dom'



export function Header () {
    const [active, setActive] = useState(false)

    const btnClassName = active ? 'active' : ''

    const btnClasses = ['header_main', btnClassName]
    

    return  <div className="main_header">
        <header className="app_header">
        <div className="header_container">
            <div className="header_btns">
                <Link to="/" 
                onClick={() => setActive(active)}
                className={btnClasses.join(' ')}>
                    Все котики
                </Link>
                <Link to="/favorite" 
                onClick={() => setActive(active)}
                className={btnClasses.join(' ')}>
                Любимые котики
                </Link>
            </div>
        </div>

    </header>
  </div>

}


