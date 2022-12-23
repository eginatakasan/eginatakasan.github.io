import Vectors from '../../assets/vectors'
import React from 'react'
import tw from 'twin.macro'
import Text from '../../components/atoms/Text/Text.atom'
import Button from '../../components/atoms/Button/Button.atom'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

const Container = tw.div`flex flex-col min-h-screen w-full relative [background-image: linear-gradient(158.2deg, #1E1E1E 46.98%, #023047 100%)] overflow-hidden lg:(max-w-[480px] border border-solid border-primary-dark)`
const Greeting = tw.div`w-full flex flex-row pt-12 pb-5 pl-12`
const About = tw.div`w-full flex flex-col relative mt-[0px]`
const Portfolio = tw.div`w-full flex flex-col relative`

const AboutView = () => {
  return (
    <Container>
      <Greeting>
        <div css={tw`flex flex-col flex-1`}>
          <Text css={tw`font-light text-textWhite whitespace-pre`}>
            Hi! My name is
          </Text>
          <Text.HeadingOne css={tw`mt-1`}>Eginata Kasan</Text.HeadingOne>
        </div>
        <div css={tw`flex-[0 0 180px] justify-center relative`}></div>
      </Greeting>
      <About>
        <div
          css={tw`absolute top-0 -translate-y-[108px] right-0 flex justify-center items-center`}
        >
          <Vectors.ClickingOnPC />
        </div>
        <Vectors.AboutMeRoundedBg css={tw`w-full h-auto z-10`} />
        <div
          css={tw`z-20 h-36 [background-image: linear-gradient(180deg, #8ECAE6 11.38%, #023047 100%);] -translate-y-0.5 relative`}
        >
          <div css={tw`absolute -top-[1.5em] inset-x-0 px-12`}>
            <Text css={tw`font-semibold mb-1`}>I am a software engineer</Text>
            <div css={tw`ml-3`}>
              <Text.Small>
                I specialize in UI/UX - I love crafting beautiful user interface
                with awesome user experience.
              </Text.Small>
            </div>
          </div>
        </div>
        <Vectors.AboutMeWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-2 opacity-30 z-20`}
        />
      </About>
      <Portfolio>
        <div
          css={tw`absolute bg-primary-dark -top-2 -left-[10%] w-[120%] h-[160px] rounded-b-[50%]`}
        />
        <div css={tw`flex flex-col items-center mt-8 mb-24 z-10`}>
          <Text.Small
            css={tw`text-white text-center whitespace-pre font-light`}
          >
            Welcome to my Portfolio website.{'\n'}Click below to see my resume
          </Text.Small>
          <Button css={tw`mt-[42px]`}>Download PDF Resume</Button>
        </div>
      </Portfolio>
      <div
        css={tw`absolute flex flex-col items-center bottom-1 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer`}
      >
        <Text.Small css={tw`text-inherit`}>Check out my playground</Text.Small>
        <ChevronDoubleDownIcon width={40} css={tw`text-inherit stroke-1`} />
      </div>
    </Container>
  )
}

export default AboutView
