import React from "react"

import { SectionContainer } from "common/section"

import Landing from "../components/landing"
import Bio from "../components/bio"

const IndexPage = () => {
  return (
    <SectionContainer>
      <Landing />
      <Bio />
    </SectionContainer>
  )
}

export default IndexPage
