
import React from 'react'
import {Patrick_Hand} from "next/font/google"
import { useMedia } from 'react-use'

const font = Patrick_Hand({ subsets: ['latin'],weight :["400"] })
type Props = {
    text : string,
   
    className : string
}

function PageTitle({text,className}: Props) {

  return (
    <h1 className={`${font.className} font-bold text-[8rem] lg:text-[18rem]  ${className}`}>{text}</h1>
  )
}

export default PageTitle