import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
        <div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>
                <li>
                    <Link to="/project">Portfolio</Link>
                </li>
            </ul>
        </div>    
    )

export default Menu
