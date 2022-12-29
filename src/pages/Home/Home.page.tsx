import React from 'react'
import tw from 'twin.macro'
import LandingView from '../../views/Landing/Landing.view'

const HomePage = () => {
  return (
    <div css={tw`w-full h-full`}>
      <LandingView />
    </div>
  )
}

export default HomePage
