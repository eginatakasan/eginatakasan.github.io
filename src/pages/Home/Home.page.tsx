import React from 'react'
import tw from 'twin.macro'
import AboutView from '../../views/About/About.view'

const HomePage = () => {
  return (
    <div css={tw`w-full h-full`}>
      <AboutView />
    </div>
  )
}

export default HomePage
