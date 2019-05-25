import React from "react"

import Section from "../shared/section"
import Spacer from "../shared/spacer"
import Arrow from "../shared/arrow"

import Title from "./title"
import SubTitle from "./sub-title"
import Header from "./header"

const Landing = () => (
  <Section color="#fafafa">
    <Header />
    <Spacer />
    <Title />
    <SubTitle />
    <Spacer />
    <Arrow href="#bio" />
  </Section>
)

export default Landing
