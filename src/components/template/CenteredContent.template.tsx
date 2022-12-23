import React from 'react'
import tw from 'twin.macro'

type Props = {
  children: React.ReactNode
}
const CenteredContent = ({ children }: Props) => {
  return (
    <div
      css={tw`fixed inset-0 h-full w-full flex flex-col items-center bg-textBlack overflow-auto`}
    >
      <div css={tw`flex w-full lg:max-w-[1024px] h-max overflow-x-hidden`}>
        {children}
      </div>
    </div>
  )
}

export default CenteredContent
