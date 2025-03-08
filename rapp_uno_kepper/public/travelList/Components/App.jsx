import React from 'react'
import Logo from './Logo';
import Item from './Item'
import Stats from './Stats';
import './styles.css'


function App() {
  return (
    <div className='app'>
        <Logo />
        <Form />
        <Item />
        <Stats />
    </div>
  );
}

export default App