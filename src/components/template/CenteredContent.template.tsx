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
      {children}
    </div>
  )
}

export default CenteredContent
