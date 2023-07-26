import React from 'react';
import ReactDom from 'react-dom/client';
import Greeting from './Greeting';
import Home from './Components/HomeUi/Home/Home'
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<div>
    <Home />
</div>)