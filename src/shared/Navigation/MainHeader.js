import React from 'react'

import './MainHeader.css'

const MainHeader = props => {
  return <header className="main-header">
    {console.log('props.children', props.children)}
    {props.children}
  </header>
}

export default MainHeader