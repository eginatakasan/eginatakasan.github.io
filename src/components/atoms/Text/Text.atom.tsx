import tw from 'twin.macro'

const Text = tw.p`[font-size: 16px] md:([font-size: 18px]) text-textBlack m-0`
const Title = tw.h1`[font-size: 48px] md:([font-size: 52px] [line-height: 1.2]) text-accent m-0 font-extrabold`
const HeadingOne = tw.h1`[font-size: 32px] md:([font-size: 48px] [line-height: 1.2]) text-accent m-0 font-extrabold`
const HeadingTwo = tw.h2`[font-size: 20px] md:([font-size: 24px]) text-textBlack m-0 font-bold`
const Small = tw.span`[font-size: 14px] md:([font-size: 16px]) text-textBlack m-0 font-light`

export default Object.assign(Text, { Title, HeadingOne, HeadingTwo, Small })
