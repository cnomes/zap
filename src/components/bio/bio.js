import React from "react"
import styled from "styled-components"

import Section from "common/section"
import emojis from "common/emojis"
import Spacer from "common/spacer"
import ProfileImage from "./profile-image"

const Wrapper = styled.span`
  align-self: center;
  margin: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-aspect-ratio: 1/1), (min-width: 1000px) and (min-height: 800px) {
    flex-direction: column;
  }

  font-size: 3rem;
  @media (max-width: 500px), (max-height: 500px) {
    font-size: 1.5rem;
  }

  .text-block {
    flex: 1;
    box-sizing: border-box;
    margin: 20px;
    max-width: 900px;
  }
`

const Text = styled.span`
  box-sizing: border-box;
  text-align: left;
  padding-left: ${({ indent }) => indent || 0};
  box-decoration-break: clone;
`

const Bio = () => (
  <Section id="bio" color="#f4d75a">
    <Spacer />
    <Wrapper>
      <ProfileImage />
      <div className="text-block">
        <Text>
          <emojis.Wave />
          &nbsp; Hi, I'm Carlo.
        </Text>
        <br />
        <Text indent="25px">
          I'm an Antwerp based developer, helping companies create amazing
          webapps using the latest tools and techniques.
        </Text>
      </div>
    </Wrapper>
    <Spacer />
  </Section>
)

export default Bio
