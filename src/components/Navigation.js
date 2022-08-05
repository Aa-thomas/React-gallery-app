import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (                  
    <nav className="main-nav">
        <ul>
            <li><Link to="/Flowers">Flowers</Link></li>
            <li><Link to="/waterfalls">Waterfalls</Link></li>
            <li><Link to="/rainbows">Rainbows</Link></li>
        </ul>
    </nav>
);

export default Navigation;