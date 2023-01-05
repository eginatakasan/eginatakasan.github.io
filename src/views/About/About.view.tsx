import Text from '../../components/atoms/Text/Text.atom'
import React from 'react'
import tw, { styled } from 'twin.macro'
import AboutMeDecor from '../../assets/vectors/AboutMeDecor.vector'

export type AboutMeItem = {
  icon: React.ReactNode
  header: string
  description: React.ReactNode
}
type Props = {
  items: AboutMeItem[]
}

const Container = tw.div`w-full relative [background-image: linear-gradient(180deg, #1E1E1E 39.66%, #111D28 100%);]`
const ListContainer = tw.li`flex flex-col gap-2 mb-4 items-start relative md:(ml-4)`
const ListHeadingContainer = tw.div`flex flex-row w-full mb-2 gap-4 justify-start`
const ListContent = tw.div`flex flex-row flex-1 justify-between`
const IconContainer = tw.div`inline-flex w-8 flex-[0 0 32px] text-primary-light`
const Line = styled.div<{ last?: boolean }>(({ last }) => [
  tw`ml-4 border-0 border-l border-solid border-primary-light`,
  last && tw`border-l-0`,
])

const ListHeading = tw.div`flex-1 mt-1 font-semibold text-primary-light`
const ListDescription = tw.div`ml-11 mb-6 font-extralight text-textWhite whitespace-pre-line [line-height: 1.5]`

const AboutView = ({ items }: Props) => {
  return (
    <Container>
      <div
        css={tw`flex flex-col pt-12 pl-8 pr-6 pb-6  relative md:(max-w-2xl justify-center mx-auto pb-10)`}
      >
        <div
          css={tw`flex items-center justify-center text-center md:(text-left justify-start) z-10`}
        >
          <Text.HeadingOne id="about" css={tw`text-textWhite mt-5 mb-10`}>
            About Me
          </Text.HeadingOne>
        </div>
        <ul>
          {items.map(({ icon, header, description }) => (
            <ListContainer>
              <ListHeadingContainer>
                <IconContainer>{icon}</IconContainer>
                <ListHeading>{header}</ListHeading>
              </ListHeadingContainer>
              <ListContent>
                <Line />
                <ListDescription>{description}</ListDescription>
              </ListContent>
            </ListContainer>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default AboutView
