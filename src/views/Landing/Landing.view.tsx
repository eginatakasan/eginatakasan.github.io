import Vectors from '../../assets/vectors'
import React from 'react'
import tw from 'twin.macro'
import Text from '../../components/atoms/Text/Text.atom'
import Button from '../../components/atoms/Button/Button.atom'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import {
  ArrowDownTrayIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Icon from '../../components/atoms/Icon'

const Container = tw.div`flex flex-col h-screen min-h-[800px] box-border w-full relative [background-image: linear-gradient(180.03deg, #1E1E1E 51.11%, #1B2123 99.97%)] overflow-hidden md:(min-h-screen)`
const Navigation = tw.div`hidden md:(absolute inset-x-0 top-0 flex flex-row justify-end gap-10 px-12 pt-8 py-3 font-semibold)`
const Greeting = tw.div`w-full flex flex-row pt-12 pb-5 pl-12 md:(pt-14 px-0 flex-col items-center text-center)`
const About = tw.div`w-full flex flex-col relative mt-[0px]`
const Portfolio = tw.div`w-full flex flex-col relative`
const Contacts = tw.div`inline-flex flex-col items-center mb-8`
const ContactContainer = tw.div`inline-flex w-max flex-row items-center justify-center gap-6 px-6 py-2 border border-solid border-accent rounded-full mb-24 `
const ContactLink = tw.a`text-accent w-8 h-8`
const SmScreenView = tw.div`w-full flex flex-col md:(hidden)`

// #region LARGE SCREEN VIEW
const LgNavLink = tw.a`hidden md:(inline [font-size: 18px] font-semibold text-accent)`
const LgContacts = tw.div`hidden md:(absolute inline-flex flex-col gap-8 right-4 top-[280px] -translate-y-1/2 border border-solid border-accent px-3 py-8 rounded-full)`
const LgContactLink = tw.a`text-accent w-8 h-8`
const LgScreenView = tw.div`w-full flex-1 hidden flex-col md:(flex) relative`
const LgAboutPortfolio = tw.div`flex flex-row w-full justify-center mt-12 mb-12 relative`
const LgCard = tw.div`flex flex-col text-center items-center py-8 px-12 w-[360px] max-w-full border border-solid bg-textBlack border-accent rounded-xl z-20`
// #endregion

const LandingView = () => {
  return (
    <Container>
      <Navigation>
        <LgNavLink href="#about">About Me</LgNavLink>
        <LgNavLink href="#playground">Playground</LgNavLink>
      </Navigation>
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

      <SmScreenView>
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
            css={tw`absolute inset-x-0 w-full h-auto bottom-2 opacity-40 z-20`}
          />
        </About>

        <Portfolio>
          <div
            css={tw`absolute bg-primary-dark -top-2 -left-[10%] w-[120%] h-[140px] rounded-b-[50%]`}
          />
          <div css={tw`flex flex-col items-center mt-8 z-10 md:(mt-4 mb-10)`}>
            <Text.Small css={tw`text-white text-center whitespace-pre`}>
              Welcome to my Portfolio website!
              <br />
              Click below to see my resume
            </Text.Small>
            <div css={tw`mt-[32px]`}>
              <a href="/resume.pdf" download="Eginata Kasan - resume">
                <Button css={tw`items-center justify-center`}>
                  <ArrowDownTrayIcon css={tw`inline-block w-4 h-4 mr-2`} />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </Portfolio>

        <Contacts>
          <div css={tw`[font-size: 14px] text-primary-light py-4`}>or</div>
          <span css={tw`text-white mb-1`}>Contact Me</span>
          <ContactContainer>
            <ContactLink href="mailto:eginatakasan@gmail.com">
              <EnvelopeIcon />
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/eginata-kasan-74a72516b/">
              <Icon.LinkedIn css={tw`w-8 h-8`} />
            </ContactLink>
            <ContactLink href="https://github.com/eginatakasan/">
              <Icon.Github css={tw`w-8 h-8`} />
            </ContactLink>
          </ContactContainer>
        </Contacts>
      </SmScreenView>

      <LgContacts>
        <LgContactLink href="mailto:eginatakasan@gmail.com">
          <EnvelopeIcon />
        </LgContactLink>
        <LgContactLink href="https://www.linkedin.com/in/eginata-kasan-74a72516b/">
          <Icon.LinkedIn />
        </LgContactLink>
        <LgContactLink href="https://github.com/eginatakasan/">
          <Icon.Github />
        </LgContactLink>
      </LgContacts>

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
            <a href="/resume.pdf" download="Eginata Kasan - resume">
              <Button css={tw`mt-[20px]`}>
                <ArrowDownTrayIcon css={tw`inline-block w-4 h-4 mr-2`} />{' '}
                Download My Resume
              </Button>
            </a>
          </LgCard>
        </LgAboutPortfolio>
        <Vectors.LandingRoundedBg
          css={tw`w-full h-auto z-10 absolute bottom-0`}
        />
        <Vectors.LandingWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-1/2 opacity-40 z-0`}
        />
      </LgScreenView>

      <a
        href="#about"
        className="group"
        css={tw`absolute inline-flex flex-col items-center bottom-1.5 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer z-10`}
      >
        <Text.Small
          css={tw`text-center text-inherit md:(font-semibold text-textBlack)`}
        >
          Find out more about me
          <span css={tw`hidden md:inline`}> or my playground</span>
        </Text.Small>
        <ChevronDoubleDownIcon
          width={40}
          css={tw`text-inherit stroke-1 group-hover:(text-inherit) md:(text-white stroke-2)`}
        />
      </a>
    </Container>
  )
}

export default LandingView
