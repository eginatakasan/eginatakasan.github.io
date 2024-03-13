import React, { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeContext'

import SunFlowers from '../../assets/vectors/Sunflower.vector'
import IntoTheNight from '../../assets/vectors/IntoTheNight.vector'

const AnimationsPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className={`animation-page ${theme}`}>
      {/* <div className="container">
        <SunFlowers className={`decoration sunflower ${theme}`} />
        <IntoTheNight className={`decoration into-the-night ${theme}`} />
        <div className="bio">
          <h1>
            Hi, My name is Eginata Kasan
            <br />
          </h1>
          and this is my experiment with SVG animations!
          <br />
        </div>
      </div> */}
      Animations
    </div>
  )
}

export default AnimationsPage
