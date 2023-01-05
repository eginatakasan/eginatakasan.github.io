import { css } from '@emotion/react'
import Button from '../../components/atoms/Button/Button.atom'
import Text from '../../components/atoms/Text/Text.atom'
import React from 'react'
import tw from 'twin.macro'

type Props = {}

const Container = tw.div`w-full flex flex-col pt-12 pl-8 pr-6 pb-12 relative md:(pb-12)`
const Grid = tw.div`grid-rows-2 justify-center items-center mx-auto`
const Card = tw.div`inline-flex flex-col items-center font-light text-center px-3 py-8 md:(w-[460px] px-10 pt-16 pb-10 h-auto )`
const CardHeading = tw(Text.HeadingTwo)`md:(mb-4)`
const CardHighlight = tw(Text.Small)``
const CardCss = css`
  .card:nth-child(3n + 1) {
    background-color: #8ecae6;
    color: #1e1e1e;
  }
  .card:nth-child(3n + 1) .heading {
    color: #35383f;
  }
  .card:nth-child(3n + 1) .highlight {
    color: #0e5aa9;
  }

  .card:nth-child(3n + 2) {
    background-color: #4a5a7d;
    color: white;
  }
  .card:nth-child(3n + 2) .heading {
    color: #8ecae6;
  }
  .card:nth-child(3n + 2) .highlight {
    color: #78baff;
  }

  .card:nth-child(3n) {
    background-color: #35383f;
    color: white;
  }
  .card:nth-child(3n) .heading {
    color: #8ecae6;
  }
  .card:nth-child(3n) .highlight {
    color: #78baff;
  }
`

const PlaygroundView = () => {
  return (
    <Container>
      <Text.HeadingOne
        id="playground"
        css={tw`text-center mt-5 mb-10 text-white`}
      >
        Playground
      </Text.HeadingOne>
      <Grid css={CardCss}>
        <Card className="card" css={CardCss}>
          <CardHeading className="heading">CSS Animation</CardHeading>
          <Text css={tw`text-inherit`}>
            An experiment consisting smooth transitions and moving SVG
            animations
          </Text>
          <CardHighlight className="highlight">#CSS #HTML</CardHighlight>
          <Button css={tw`mt-6 md:(mt-16)`}>Check it out</Button>
        </Card>
        <Card className="card" css={[CardCss]}>
          <CardHeading className="heading">CSS Animation</CardHeading>
          <Text css={tw`text-inherit`}>
            An experiment consisting smooth transitions and moving SVG
            animations
          </Text>
          <CardHighlight className="highlight">#CSS #HTML</CardHighlight>
          <Button css={tw`mt-6 md:(mt-16)`}>Check it out</Button>
        </Card>
        <Card className="card" css={[CardCss]}>
          <CardHeading className="heading">CSS Animation</CardHeading>
          <Text css={tw`text-inherit`}>
            An experiment consisting smooth transitions and moving SVG
            animations
          </Text>
          <CardHighlight className="highlight">#CSS #HTML</CardHighlight>
          <Button css={tw`mt-6 md:(mt-16)`}>Check it out</Button>
        </Card>
      </Grid>
    </Container>
  )
}

export default PlaygroundView
