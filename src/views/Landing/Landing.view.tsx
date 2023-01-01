import Vectors from '../../assets/vectors'
import React from 'react'
import tw from 'twin.macro'
import Text from '../../components/atoms/Text/Text.atom'
import Button from '../../components/atoms/Button/Button.atom'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const Container = tw.div`flex flex-col min-h-screen box-border w-full relative [background-image: linear-gradient(180.03deg, #1E1E1E 51.11%, #1B2123 99.97%)] overflow-hidden md:()`
const Greeting = tw.div`w-full flex flex-row pt-12 pb-5 pl-12 md:(px-0 flex-col items-center text-center)`
const About = tw.div`w-full flex flex-col relative mt-[0px]`
const Portfolio = tw.div`w-full flex flex-col relative`
const SmallScreenView = tw.div`w-full flex flex-col md:(hidden)`

// #region LARGE SCREEN VIEW
const LgScreenView = tw.div`w-full flex-1 hidden flex-col md:(flex) relative`
const LgAboutPortfolio = tw.div`flex flex-row w-full justify-center mt-12 mb-12 relative`
const LgCard = tw.div`flex flex-col text-center items-center py-8 px-12 w-[360px] max-w-full border border-solid bg-textBlack border-accent rounded-xl z-20`
// #endregion

const LandingView = () => {
  return (
    <Container>
      <Greeting>
        <div css={tw`flex flex-col mr-[180px] md:mr-0`}>
          <Text css={tw`font-light text-textWhite whitespace-pre`}>
            Hi! My name is
          </Text>
          <Text.Title css={tw`mt-1`}>Eginata Kasan</Text.Title>
        </div>
        <Vectors.ClickingOnPC
          css={tw`hidden md:(flex w-[200px] h-[200px]) mt-8`}
        />
      </Greeting>

      <SmallScreenView>
        <About>
          <Vectors.ClickingOnPC
            css={tw`absolute top-0 -translate-y-[108px] right-0 flex justify-center items-center md:(hidden)`}
          />
          <Vectors.LandingRoundedBg css={tw`w-full h-auto z-10`} />
          <div
            css={tw`z-20 h-32 [background-image: linear-gradient(180deg, #8ECAE6 11.38%, #1F3449 100%)] -translate-y-0.5 relative md:(h-28)`}
          >
            <div css={tw`absolute -top-[1.5em] inset-x-0 px-12`}>
              <Text css={tw`font-semibold mb-1`}>I am a software engineer</Text>
              <div css={tw`ml-3`}>
                <Text.Small>
                  I specialize in UI/UX - I love crafting beautiful user
                  interface with awesome user experience.
                </Text.Small>
              </div>
            </div>
          </div>
          <Vectors.LandingWave
            css={tw`absolute inset-x-0 w-full h-auto bottom-2 opacity-30 z-20`}
          />
        </About>
        <Portfolio>
          <div
            css={tw`absolute bg-primary-dark -top-2 -left-[10%] w-[120%] h-[140px] rounded-b-[50%]`}
          />
          <div
            css={tw`flex flex-col items-center mt-8 mb-24 z-10 md:(mt-4 mb-10)`}
          >
            <Text.Small
              css={tw`text-white text-center whitespace-pre font-light`}
            >
              Welcome to my Portfolio website!
              <br />
              Click below to see my resume
            </Text.Small>
            <Button css={tw`mt-[32px]`}>Download PDF Resume</Button>
          </div>
        </Portfolio>
      </SmallScreenView>

      <LgScreenView>
        <LgAboutPortfolio>
          <LgCard css={tw`rounded-r-none`}>
            <Text css={tw`font-semibold mb-1 text-primary-light`}>
              I am a software engineer
            </Text>
            <Text.Small css={tw`text-textWhite`}>
              I specialize in UI/UX - I love crafting beautiful user interface
              with awesome user experience.
            </Text.Small>
          </LgCard>
          <LgCard css={tw`border-l-0 rounded-l-none`}>
            <Text.Small
              css={tw`text-primary-light text-center whitespace-pre font-light`}
            >
              Welcome to my Portfolio website.
              <br />
              Click below to see my resume
            </Text.Small>
            <Button css={tw`mt-[20px]`}>Download PDF Resume</Button>
          </LgCard>
        </LgAboutPortfolio>
        <Vectors.LandingRoundedBg
          css={tw`w-full h-auto z-10 absolute bottom-0`}
        />
        <Vectors.LandingWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-1/2 opacity-20 z-0`}
        />
      </LgScreenView>

      <div
        css={tw`absolute inline-flex flex-col items-center bottom-1.5 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer z-10`}
      >
        <Text.Small
          css={tw`text-center text-inherit md:(font-semibold text-textBlack)`}
        >
          Check out more about me
          <span css={tw`hidden md:inline`}> or my playground</span>
        </Text.Small>
        <ChevronDoubleDownIcon
          width={40}
          css={tw`text-inherit stroke-1 md:(text-white stroke-2)`}
        />
      </div>
    </Container>
  )
}

export default LandingView
