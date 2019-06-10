import React from "react"
import styled from "styled-components"

import Section from "common/section"
import emojis from "common/emojis"
import Spacer from "common/spacer"

const Wrapper = styled.span`
  align-self: center;
  margin: 20px;
  max-width: 900px;

  font-size: 3rem;
`

const Text = styled.span`
  text-align: left;
  box-decoration-break: clone;
`

const Bio = () => (
  <Section id="bio" color="#f4d75a">
    <Spacer />
    <Wrapper>
      <Text>
        <emojis.Wave />
        &nbsp; Hi, I'm Carlo.
        <br />
        I'm an Antwerp based developer, helping companies create amazing webapps
        using the latest tools and techniques.
      </Text>
    </Wrapper>
    <Spacer />
  </Section>
)

export default Bio
