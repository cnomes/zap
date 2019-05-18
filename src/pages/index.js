import React from "react"
import styled from "styled-components"

import Section from "../components/shared/section"

import LandingSection from "../components/landing/section"

const PH = styled.div`
  width: 100%;
  height: 100%;

  animation: groove 30s infinite;
  background-color: #3d3d3d;
`

const IndexPage = () => (
  <React.Fragment>
    <LandingSection />
  </React.Fragment>
)

export default IndexPage
