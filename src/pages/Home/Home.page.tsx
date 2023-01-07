import React from 'react'
import tw from 'twin.macro'
import PlaygroundView from '../../views/Playground/Playground.view'
import AboutView from '../../views/About/About.view'
import LandingView from '../../views/Landing/Landing.view'
import useHomeViewModel from './Home.viewModel'

const HomePage = () => {
  const { aboutMeItems, playgroundItems } = useHomeViewModel()
  return (
    <div css={tw`w-full h-full flex flex-col`}>
      <LandingView />
      <AboutView items={aboutMeItems} />
      <PlaygroundView items={playgroundItems} />
    </div>
  )
}

export default HomePage
